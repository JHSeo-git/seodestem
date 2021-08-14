import '@figma/plugin-typings';
import { FigmaKitRequest, RequestParameters } from './types';
export declare class FigmaKit {
    private token;
    private defaultOptions;
    request: FigmaKitRequest;
    constructor(token: string, options?: RequestParameters);
}
