import { ResponseHeaders } from './ResponseHeaders';
import { Url } from './Url';
export declare type FigmaKitResponse<T, S extends number = number> = {
    headers: ResponseHeaders;
    status: S;
    url: Url;
    data: T;
};
