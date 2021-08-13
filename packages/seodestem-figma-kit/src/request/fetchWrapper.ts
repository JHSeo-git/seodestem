import nodeFetch, { RequestInit } from 'node-fetch';

export type FetchOptions = {
  url: string;
  method: string;
  options?: any;
};

export default async function fetchWrapper({
  url,
  method,
  options,
}: FetchOptions) {
  try {
    const requestOptions: RequestInit = {
      method,
      ...options,
    };
    const fetch = await nodeFetch(url, requestOptions);

    return fetch;
  } catch (e) {
    return Promise.reject(e);
  }
}
