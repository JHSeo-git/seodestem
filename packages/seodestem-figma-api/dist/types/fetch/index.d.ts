import { RequestConfig } from '../types';
/**
 * fetch function:
 * node-fetch wrapper function
 *
 * @param url
 * @param requestConfig
 */
export declare function fetch(requestConfig: RequestConfig): Promise<{
    status: number;
    url: string;
    headers: {
        [header: string]: string;
    };
    data: any;
}>;
