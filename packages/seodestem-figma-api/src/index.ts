import { endpoint, RequestInterface } from './request';

export * from './types';
export const request: RequestInterface = (route, options) => {
  const requestWrapper = endpoint(route, options);

  // RequestInterface prototype
  return Object.assign(requestWrapper);
};
