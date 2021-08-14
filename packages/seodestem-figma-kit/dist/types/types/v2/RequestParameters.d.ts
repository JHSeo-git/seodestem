/// <reference types="node" />
import { RequestOptions } from 'https';
import { RequestHeaders } from './RequestHeaders';
import { Url } from './Url';
export declare type RequestParameters = {
    baseUrl?: Url;
    headers?: RequestHeaders;
    request?: RequestOptions;
    [parameter: string]: unknown;
};
