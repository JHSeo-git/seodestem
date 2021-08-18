import { EndpointInterface, RequestParameters, RequestInterface } from './types';
/**
 * figma api wrapper request function
 *
 * @param route figma api route
 * @param options request parameters + body + options
 * @returns
 */
export declare const endpoint: EndpointInterface;
export declare function requestWithDefaults(newDefaults: RequestParameters): RequestInterface;
