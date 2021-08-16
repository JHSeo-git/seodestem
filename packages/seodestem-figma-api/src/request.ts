import { fetch } from './fetch';
import {
  Endpoints,
  FigmaAPIResponse,
  RequestMethod,
  RequestHeaders,
} from './types';
import { addQueryParameters } from './util/add-query-parameters';
import { extractUrlVariableNames } from './util/extract-url-variable-names';
import { lowercaseKeys } from './util/lowercase-keys';
import { omit } from './util/omit';
import { removeUndefinedProperties } from './util/remove-undefined-properties';
import { parseUrl } from './util/url-template';

type RequestParameters = {
  url: string;
  method: string;
  baseUrl?: string;
  headers?: RequestHeaders;
};

export type RequestInterface<R extends string = string> = (
  route: keyof Endpoints | R,
  options?: R extends keyof Endpoints
    ? Endpoints[R]['parameters'] & RequestParameters
    : RequestParameters
) => R extends keyof Endpoints
  ? Promise<Endpoints[R]['responses']>
  : Promise<FigmaAPIResponse<any>>;

/**
 * figma api wrapper request function
 *
 * @param route figma api route
 * @param options request parameters + body + options
 * @returns
 */
export const request: RequestInterface = (route, options) => {
  // merge & parse options
  const requestOptions = parseRouteAndOptions(route, options);

  // replace url variables(ie. :key -> {key})
  let url = (requestOptions?.url || '/').replace(/:([a-z]\w+)/g, '{$1}');
  let method = (requestOptions?.method || 'get').toUpperCase() as RequestMethod;
  let headers = Object.assign({}, requestOptions?.headers);
  let body: string | object | undefined;
  let parameters = omit(requestOptions || {}, [
    //
    'url',
    'method',
    'baseUrl',
    'headers',
  ]);

  // extract parameters variable names in url
  const urlVariableNames = extractUrlVariableNames(url);
  // replace path variable names to values
  url = parseUrl(url).expand(parameters);

  if (!/^http/.test(url)) {
    url = (requestOptions?.baseUrl || 'https://api.figma.com') + url;
  }

  const omiitedParameters = Object.keys(requestOptions || {})
    .filter(option => urlVariableNames.includes(option))
    .concat('baseUrl');
  // body, query parameters, baseUrl
  const remainingParameters = omit(parameters, omiitedParameters);

  // if GET requests, set URL query parameters from remaining parameters
  // if POST/POST/PATCH/PUT/DELETE requests, set request body from remaining parameters
  if (['GET'].includes(method)) {
    url = addQueryParameters(url, remainingParameters);
  } else {
    if ('data' in remainingParameters) {
      body = remainingParameters.data;
    } else {
      if (Object.keys(remainingParameters).length) {
        body = remainingParameters;
      } else {
        headers['content-length'] = 0;
      }
    }
  }

  // set headers 'content-type' = application/json; charset=utf-8
  if (!headers['content-type'] && typeof body !== 'undefined') {
    headers['content-type'] = 'application/json; charset=utf-8';
  }

  return fetch({
    url,
    method,
    headers,
    body,
    parameters,
  });
};

function parseRouteAndOptions(route: string, options?: RequestParameters) {
  const [method, url] = route.split(' ');

  const mergedOptions = Object.assign(
    url ? { method, url } : { url: method },
    options
  );

  mergedOptions.headers = lowercaseKeys(mergedOptions.headers);
  removeUndefinedProperties(mergedOptions);
  removeUndefinedProperties(mergedOptions.headers);

  return mergedOptions;
}
