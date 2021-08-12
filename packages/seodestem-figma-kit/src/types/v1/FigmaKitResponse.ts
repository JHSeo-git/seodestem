import { Url } from './Url';

type ResponseHeaders = {
  'cache-control'?: string;
  'content-length'?: number;
  'content-type'?: string;
  date?: string;
  etag?: string;
  'last-modified'?: string;
  link?: string;
  location?: string;
  server?: string;
  status?: string;
  vary?: string;

  [header: string]: string | number | undefined;
};

export type FigmaKitResponse<T, S extends number = number> = {
  headers: ResponseHeaders;
  status: S;
  url: Url;
  data: T;
};
