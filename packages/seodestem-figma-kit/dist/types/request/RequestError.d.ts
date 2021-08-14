/// <reference types="node" />
import { RequestOptions } from 'https';
import { FigmaKitResponse } from '../types';
import { ResponseHeaders } from '../types/v2/ResponseHeaders';
declare type RequestErrorOptions = {
    request: RequestOptions;
    response?: FigmaKitResponse<unknown>;
};
export default class RequestError extends Error {
    name: 'HttpError';
    status: number;
    request: RequestOptions;
    headers: ResponseHeaders;
    constructor(message: string, statusCode: number, options: RequestErrorOptions);
}
export {};
