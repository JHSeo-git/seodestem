import { RequestHeaders } from './common';
export declare type RequestMethod = 'DELETE' | 'GET' | 'HEAD' | 'PATCH' | 'POST' | 'PUT';
declare type Parameters = {
    [parameter: string]: unknown;
};
export declare type RequestConfig = {
    url: string;
    method: RequestMethod;
    headers: RequestHeaders;
    parameters?: Parameters;
    body?: any;
};
export {};
