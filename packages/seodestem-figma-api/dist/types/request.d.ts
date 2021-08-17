import { Endpoints, FigmaAPIResponse, RequestHeaders } from './types';
declare type RequestParameters = {
    headers?: RequestHeaders;
};
declare type EndpointInterface<R extends string = string> = (route: R | keyof Endpoints, options?: R extends keyof Endpoints ? Endpoints[R]['parameters'] & RequestParameters : RequestParameters) => R extends keyof Endpoints ? Promise<Endpoints[R]['responses']> : Promise<FigmaAPIResponse<any>>;
/**
 * Interface Object Type
 */
export declare type RequestInterface = {
    <R extends string>(route: R | keyof Endpoints, options?: R extends keyof Endpoints ? Endpoints[R]['parameters'] & RequestParameters : RequestParameters): R extends keyof Endpoints ? Promise<Endpoints[R]['responses']> : Promise<FigmaAPIResponse<any>>;
};
/**
 * figma api wrapper request function
 *
 * @param route figma api route
 * @param options request parameters + body + options
 * @returns
 */
export declare const endpoint: EndpointInterface;
export {};
