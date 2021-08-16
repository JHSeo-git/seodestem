import { RequestHeaders } from './common';

export type RequestMethod =
  | 'DELETE'
  | 'GET'
  | 'HEAD'
  | 'PATCH'
  | 'POST'
  | 'PUT';
type Parameters = {
  [parameter: string]: unknown;
};

export type RequestConfig = {
  url: string;
  method: RequestMethod;
  headers: RequestHeaders;
  parameters?: Parameters;
  body?: any;
};
