import { endpoint, RequestInterface } from './request';

export const request: RequestInterface = (route, options) => {
  const requestWrapper = endpoint(route, options);
  return Object.assign(requestWrapper);
};
