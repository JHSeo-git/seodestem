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
    if (typeof data.err === 'boolean') {
      if ('message' in data) {
        return data.message;
      }
      return `Sorry, It is not typed error`;
    } else if (typeof data.err === 'string') {
      return data.err;
    }
  } else if ('error' in data) {
    if (typeof data.error === 'boolean') {
      if ('message' in data) {
        return data.message;
      } else if (typeof data.error === 'string') {
        return data.error;
      }
    }
  }

  return `Unknown Error: ${JSON.stringify(data)}`;
}

// export function toErrorMessage(data: any) {
//   if (typeof data === 'string') return data;

//   // istanbul ignore else - just in case
//   if ('message' in data) {
//     if (Array.isArray(data.errors)) {
//       return `${data.message}: ${data.errors.map(JSON.stringify).join(', ')}`;
//     }

//     return data.message;
//   }

//   // istanbul ignore next - just in case
//   return `Unknown error: ${JSON.stringify(data)}`;
// }
