import { Route } from '../types';

export function routeParse(route?: Route) {
  if (typeof route !== 'string') throw new Error('Route is not string type');
  const [method, url] = route.split(' ');

  return {
    method,
    url,
  };
}
