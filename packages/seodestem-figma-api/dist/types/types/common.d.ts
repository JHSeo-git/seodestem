declare type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
declare type ExtractRequestParameters<T> = 'parameters' extends keyof T ? UnionToIntersection<{
    [K in keyof T['parameters']]: T['parameters'][K];
}[keyof T['parameters']]> : {};
declare type ExtractRequestBody<T> = 'requestBody' extends keyof T ? UnionToIntersection<{
    [K in keyof T['requestBody']]: T['requestBody'][K];
}[keyof T['requestBody']]> : {};
export declare type RequestHeaders = {
    'X-FIGMA-TOKEN'?: string;
    [header: string]: string | number | undefined;
};
declare type ResponseHeaders = {
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
declare type APIResponse<T, S extends number = number> = {
    headers: ResponseHeaders;
    status: S;
    url: string;
    data: T;
};
declare type SuccessStatuses = 200 | 201 | 202 | 204;
declare type ExtractContentKey<T> = 'content' extends keyof T ? {
    [K in keyof T['content']]: T['content'][K];
}[keyof T['content']] : T;
declare type SuccessResponseDataType<Responses> = {
    [K in SuccessStatuses & keyof Responses]: ExtractContentKey<Responses[K]> extends never ? never : APIResponse<ExtractContentKey<Responses[K]>, K>;
};
/**
 * type Extract Request
 */
export declare type ExtractRequest<T> = ExtractRequestParameters<T> & ExtractRequestBody<T>;
/**
 * type Extract Response
 */
export declare type ExtractResponses<R> = 'responses' extends keyof R ? SuccessResponseDataType<R['responses']> extends never ? never : SuccessResponseDataType<R['responses']> : unknown;
/**
 * type Methods
 */
export declare type MethodsMap = {
    delete: 'DELETE';
    get: 'GET';
    patch: 'PATCH';
    post: 'POST';
    put: 'PUT';
};
export {};
