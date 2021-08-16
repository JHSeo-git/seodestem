import { Endpoints, FigmaAPIResponse, RequestHeaders } from './types';
declare type RequestParameters = {
    url: string;
    method: string;
    baseUrl?: string;
    headers?: RequestHeaders;
};
declare type RequestInterface<R extends string = string> = (route: keyof Endpoints | R, options?: R extends keyof Endpoints ? Endpoints[R]['parameters'] & RequestParameters : RequestParameters) => R extends keyof Endpoints ? Promise<Endpoints[R]['responses']> : Promise<FigmaAPIResponse<any>>;
/**
 * figma api wrapper request function
 *
 * @param route figma api route
 * @param options request parameters + body + options
 * @returns
 */
export declare const request: RequestInterface;
export {};
