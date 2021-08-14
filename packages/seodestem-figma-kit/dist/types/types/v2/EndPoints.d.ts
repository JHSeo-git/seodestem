/**
 * @see https://github.com/octokit/types.ts/blob/master/src/generated/Endpoints.ts
 */
import '@figma/plugin-typings';
import { FigmaKitResponse } from './FigmaKitResponse';
import { RequestHeaders } from './RequestHeaders';
declare type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
declare type ExtractRequestParameters<T> = 'parameters' extends keyof T ? UnionToIntersection<{
    [K in keyof T['parameters']]: T['parameters'][K];
}[keyof T['parameters']]> : {};
declare type ExtractRequestBody<T> = 'requestBody' extends keyof T ? 'content' extends keyof T['requestBody'] ? 'application/json' extends keyof T['requestBody']['content'] ? T['requestBody']['content']['application/json'] : {
    data: {
        [K in keyof T['requestBody']['content']]: T['requestBody']['content'][K];
    }[keyof T['requestBody']['content']];
} : 'application/json' extends keyof T['requestBody'] ? T['requestBody']['application/json'] : {
    data: {
        [K in keyof T['requestBody']]: T['requestBody'][K];
    }[keyof T['requestBody']];
} : {};
declare type ExtractParameters<T> = ExtractRequestParameters<T> & ExtractRequestBody<T>;
declare type MethodsMap = {
    delete: 'DELETE';
    get: 'GET';
    patch: 'PATCH';
    post: 'POST';
    put: 'PUT';
};
declare type SuccessStatuses = 200 | 201 | 202 | 204;
declare type RedirectStatuses = 301 | 302;
declare type EmptyResponseStatuses = 201 | 204;
declare type KnownJsonResponseTypes = 'application/json' | 'application/scim+json' | 'text/html';
declare type SuccessResponseDataType<Responses> = {
    [K in SuccessStatuses & keyof Responses]: GetContentKey<Responses[K]> extends never ? never : FigmaKitResponse<GetContentKey<Responses[K]>, K>;
}[SuccessStatuses & keyof Responses];
declare type RedirectResponseDataType<Responses> = {
    [K in RedirectStatuses & keyof Responses]: FigmaKitResponse<unknown, K>;
}[RedirectStatuses & keyof Responses];
declare type EmptyResponseDataType<Responses> = {
    [K in EmptyResponseStatuses & keyof Responses]: FigmaKitResponse<never, K>;
}[EmptyResponseStatuses & keyof Responses];
declare type ExtractResponse<R> = 'responses' extends keyof R ? SuccessResponseDataType<R['responses']> extends never ? RedirectResponseDataType<R['responses']> extends never ? EmptyResponseDataType<R['responses']> : RedirectResponseDataType<R['responses']> : SuccessResponseDataType<R['responses']> : unknown;
declare type paths = {
    '/v1/files/:key': {
        get: {
            parameters: {
                key: string;
                version?: string;
                ids?: string;
                depth?: number;
                geometry?: string;
                plugin_data?: string;
                branch_data?: string;
            };
            response: {
                200: {
                    content: {
                        name: String;
                        role: String;
                        lastModified: String;
                        thumbnailUrl: String;
                        version: String;
                        document: NodeType;
                        components: Map<String, ComponentNode>;
                        schemaVersion: 0;
                        styles: Map<String, StyleType>;
                        mainFileKey: String;
                        branches: [
                            {
                                key: String;
                                name: String;
                                thumbnail_url: String;
                                last_modified: String;
                            }
                        ];
                    };
                };
                404: {
                    content: {
                        message?: string;
                        url?: string;
                        status?: string;
                    };
                };
            };
        };
    };
    '/v1/files/:key/:title': {
        get: {
            parameters: {
                key: string;
                title: string;
            };
            response: {};
        };
    };
};
declare type DataType<T> = {
    [K in KnownJsonResponseTypes & keyof T]: T[K];
}[KnownJsonResponseTypes & keyof T];
declare type GetContentKey<T> = 'content' extends keyof T ? DataType<T['content']> : DataType<T>;
declare type Operation<Url extends keyof paths, Method extends keyof paths[Url]> = {
    parameters: ExtractParameters<paths[Url][Method]>;
    request: {
        method: Method extends keyof MethodsMap ? MethodsMap[Method] : never;
        url: Url;
        headers: RequestHeaders;
        body?: any;
    };
    response: ExtractResponse<paths[Url][Method]>;
};
export interface EndPoints {
    'GET /v1/files/:key': Operation<'/v1/files/:key', 'get'>;
    'GET /v1/files/:key/:title': Operation<'/v1/files/:key/:title', 'get'>;
}
export {};
