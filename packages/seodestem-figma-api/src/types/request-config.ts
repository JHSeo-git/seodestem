import { RequestHeaders } from './common';

type Method = 'DELETE' | 'GET' | 'HEAD' | 'PATCH' | 'POST' | 'PUT';
type Parameters = {
  [parameter: string]: unknown;
};

export type RequestConfig = {
  url: string;
  method: Method;
  headers: RequestHeaders;
  parameters?: Parameters;
  body?: any;
};
