import { RequestHeaders } from './RequestHeaders';
import { RequestMethod } from './RequestMethod';
import { Url } from './Url';
export declare type RequestOptions = {
    method: RequestMethod;
    url: Url;
    headers: RequestHeaders;
    body?: any;
};
