import fetchWrapper from './fetchWrapper';
import { FigmaKitRequest, FigmaKitResponse, RequestParameters } from '../types';
import { routeParse } from '../util/route-parse';
import { extractUrlVariableNames } from '../util/extract-uri-variable-names';
import { RequestMethod } from '../types/v1/RequestMethod';
import { omit } from '../util/omit';

export const request: FigmaKitRequest = (route, options) => {
  const parsedRoute = routeParse(route);
  const method = parsedRoute.method.toUpperCase() as RequestMethod;

  // change url variable :key -> {key}
  const url = (parsedRoute.url || '/').replace(/:([a-z]\w+)/g, '{$1}');
  const headers = Object.assign({}, options?.headers);
  let body: string | object | undefined;

  const urlVariableNames = extractUrlVariableNames(url);
  let parameters = omit(options ?? {}, [
    'method',
    'baseUrl',
    'url',
    'headers',
    'request',
  ]);

  return fetchWrapper({
    url,
    headers,
    method,
    body,
    options,
  }) as any;
};
