import { Response } from 'node-fetch';

export function getBufferResponse(response: Response) {
  return response.arrayBuffer();
}

export async function getResponseData(response: Response) {
  const contentType = response.headers.get('content-type');
  if (/application\/json/.test(contentType!)) {
    return response.json();
  }

  if (!contentType || /^text\/|charset=utf-8$/.test(contentType)) {
    return response.text();
  }

  return getBufferResponse(response);
}

export function toErrorMessage(data: any) {
  if (typeof data === 'string') return data;

  if ('err' in data) {
    return `Error: ${data.err}`;
  }

  return 'Unknown Error';
}
