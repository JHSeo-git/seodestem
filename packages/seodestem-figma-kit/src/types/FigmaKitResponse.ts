import { ResponseHeaders } from './ResponseHeaders';

type Url = string;

export type FigmaKitResponse<T, S extends number = number> = {
  headers: ResponseHeaders;
  status: S;
  url: Url;
  data: T;
};
