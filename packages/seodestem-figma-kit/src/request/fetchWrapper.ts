import nodeFetch, { RequestInit } from 'node-fetch';
import { isPlainObject } from 'is-plain-object';
import { RequestHeaders } from '../types';
import { getResponseData, toErrorMessage } from './utils';
import RequestError from './RequestError';

export type FetchOptions = {
  url: string;
  method: string;
  headers: RequestHeaders;
  body?: any;
  options?: any;
};

export default async function fetchWrapper(fetchOptions: FetchOptions) {
  try {
    if (isPlainObject(fetchOptions.body) || Array.isArray(fetchOptions.body)) {
      fetchOptions.body = JSON.stringify(fetchOptions.body);
    }

    const requestOptions: RequestInit = {
      method: fetchOptions.method,
      headers: fetchOptions.headers,
      body: fetchOptions.body,
      ...fetchOptions.options,
    };

    const response = await nodeFetch(fetchOptions.url, requestOptions);

    const url = response.url;
    const status = response.status;

    const headers: { [header: string]: string } = {};
    for (const kv of response.headers) {
      headers[kv[0]] = kv[1];
    }

    /**
     * 204: Success - No Content
     * 205: Success - Reset Content
     */
    if (status === 204 || status === 205) {
      return {
        url,
        status,
        headers,
        data: undefined,
      };
    }

    if (status >= 400) {
      const data = await getResponseData(response);

      const error = new RequestError(toErrorMessage(data), status, {
        request: fetchOptions,
        response: {
          url,
          status,
          headers,
          data,
        },
      });
      throw error;
    }

    const data = await response.json();

    return {
      url,
      status,
      headers,
      data,
    };
  } catch (e) {
    if (e instanceof RequestError) throw e;

    throw new RequestError(e.message, 500, {
      request: fetchOptions,
    });
  }
}
