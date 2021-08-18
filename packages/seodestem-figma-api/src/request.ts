import { fetch } from './fetch';
import {
  RequestMethod,
  EndpointInterface,
  RequestParameters,
  RequestInterface,
} from './types';
import { addQueryParameters } from './util/add-query-parameters';
import { extractUrlVariableNames } from './util/extract-url-variable-names';
import { lowercaseKeys } from './util/lowercase-keys';
import { omit } from './util/omit';
import { removeUndefinedProperties } from './util/remove-undefined-properties';
import { parseUrl } from './util/url-template';

/**
 * figma api wrapper request function
 *
 * @param route figma api route
 * @param options request parameters + body + options
 * @returns
 */
export const endpoint: EndpointInterface = (route, options) => {
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
    // TODO: default set baseUrl
    // url = (requestOptions?.baseUrl || 'https://api.figma.com') + url;
    url = 'https://api.figma.com' + url;
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

export function requestWithDefaults(
  newDefaults: RequestParameters
): RequestInterface {
  const newEndpoint: EndpointInterface = (route, options) => {
    const optionsWithDefaults: RequestParameters = {
      ...newDefaults,
      ...options,
    };

    return endpoint(route, optionsWithDefaults);
  };
  return Object.assign(newEndpoint);
}

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
