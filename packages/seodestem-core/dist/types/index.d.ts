import { request } from '@seodestem/figma-api';
export declare class SeoDestemKit {
    private token;
    request: typeof request;
    constructor(token: string);
}
