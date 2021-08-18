import { FigmaAPIResponse, RequestHeaders } from './common';
import { Endpoints } from './endpoints';
export declare type RequestParameters = {
    headers?: RequestHeaders;
};
export declare type EndpointInterface<R extends string = string> = (route: R | keyof Endpoints, options?: R extends keyof Endpoints ? Endpoints[R]['parameters'] & RequestParameters : RequestParameters) => R extends keyof Endpoints ? Promise<Endpoints[R]['responses']> : Promise<FigmaAPIResponse<any>>;
/**
 * Interface Object Type
 */
export declare type RequestInterface = {
    <R extends string>(route: R | keyof Endpoints, options?: R extends keyof Endpoints ? Endpoints[R]['parameters'] & RequestParameters : RequestParameters): R extends keyof Endpoints ? Promise<Endpoints[R]['responses']> : Promise<FigmaAPIResponse<any>>;
    defaults: (newDefaults: RequestParameters) => RequestInterface;
};
