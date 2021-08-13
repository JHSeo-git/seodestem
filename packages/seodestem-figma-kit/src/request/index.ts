import fetch, { Response, RequestInit } from 'node-fetch';
import { FigmaKitRequest } from '../types';
import { routeParse } from '../util/route-parse';

function getBufferResponse(response: Response) {
  return response.arrayBuffer();
}

async function getResponseData(response: Response) {
  const contentType = response.headers.get('content-type');
  if (/application\/json/.test(contentType!)) {
    return response.json();
  }

  if (!contentType || /^text\/|charset=utf-8$/.test(contentType)) {
    return response.text();
  }

  return getBufferResponse(response);
}

export const request: FigmaKitRequest = (route, options) => {
  const parsedRoute = routeParse(route);
  const merged = {
    ...options,
    ...parsedRoute,
  };

  const fetchOptions: RequestInit = {
    method: merged.method,
  };

  return fetch('', {}).then(data => getResponseData(data));
};
