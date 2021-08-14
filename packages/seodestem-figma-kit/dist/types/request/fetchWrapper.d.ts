import { RequestHeaders } from '../types';
export declare type FetchOptions = {
    url: string;
    method: string;
    headers: RequestHeaders;
    body?: any;
    options?: any;
};
export default function fetchWrapper(fetchOptions: FetchOptions): Promise<{
    url: string;
    status: number;
    headers: {
        [header: string]: string;
    };
    data: any;
}>;
