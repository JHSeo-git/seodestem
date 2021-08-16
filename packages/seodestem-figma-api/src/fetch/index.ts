import nodeFetch, { HeadersInit, RequestInit } from 'node-fetch';
import { isPlainObject } from 'is-plain-object';
import { RequestConfig } from '../types';
import FigmaApiResponseError from '../error/FigmaApiResponseError';
import { getResponseData, toErrorMessage } from './utils';

/**
 * fetch function:
 * node-fetch wrapper function
 *
 * @param url
 * @param requestConfig
 */
export function fetch(requestConfig: RequestConfig) {
  // body type check and parse body object
  if (isPlainObject(requestConfig.body) || Array.isArray(requestConfig.body)) {
    requestConfig.body = JSON.stringify(requestConfig.body);
  }

  // serialized Node fetch RequestInit
  const requestInit: RequestInit = {
    headers: requestConfig.headers as HeadersInit,
    method: requestConfig.method,
    body: requestConfig.body,

    // parameters
    ...requestConfig.parameters,
  };

  let headers: { [header: string]: string } = {};
  let status: number;
  let url: string;

  return nodeFetch(requestConfig.url, requestInit)
    .then(async response => {
      url = response.url;
      status = response.status;
      for (const kv in response.headers) {
        headers[kv[0]] = kv[1];
      }

      if (status === 204 || status === 205) {
        return;
      }

      if (status >= 400) {
        const data = await getResponseData(response);
        const error = new FigmaApiResponseError(toErrorMessage(data), status, {
          request: requestConfig,
          response: {
            url,
            status,
            headers,
            data,
          },
        });

        throw error;
      }

      return getResponseData(response);
    })
    .then(data => ({
      status,
      url,
      headers,
      data,
    }))
    .catch(error => {
      if (error instanceof FigmaApiResponseError) throw error;

      throw new FigmaApiResponseError(error.message, 500, {
        request: requestConfig,
      });
    });
}
