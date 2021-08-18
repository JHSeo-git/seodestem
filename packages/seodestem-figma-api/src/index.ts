import { endpoint, requestWithDefaults } from './request';
import { RequestInterface } from './types';
export * from './types';

export const request: RequestInterface = (route, options) => {
  const newEndpoint = endpoint(route, options);

  return Object.assign(newEndpoint);
};
// FIXME: prototype
request.defaults = requestWithDefaults;
