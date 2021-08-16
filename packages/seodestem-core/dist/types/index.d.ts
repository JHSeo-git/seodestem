import { request } from '@seodestem/figma-api';
export declare class Core {
    baseUrl: string;
    request: typeof request;
    constructor(baseUrl?: string);
}
