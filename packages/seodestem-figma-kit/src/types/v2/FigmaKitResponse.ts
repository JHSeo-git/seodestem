import { ResponseHeaders } from './ResponseHeaders';
import { Url } from '../Url';

export type FigmaKitResponse<T, S extends number = number> = {
  headers: ResponseHeaders;
  status: S;
  url: Url;
  data: T;
};
