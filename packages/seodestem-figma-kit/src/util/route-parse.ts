import { Route } from '../types';

export function routeParse(route?: Route) {
  if (typeof route !== 'string') return null;
  const [method, url] = route.split(' ');

  return {
    method,
    url,
  };
}
