import { RequestOptions } from 'https';
import { RequestHeaders } from './RequestHeaders';
import { Url } from './Url';

export type RequestParameters = {
  baseUrl?: Url;
  headers?: RequestHeaders;
  request?: RequestOptions;
  [parameter: string]: unknown;
};
