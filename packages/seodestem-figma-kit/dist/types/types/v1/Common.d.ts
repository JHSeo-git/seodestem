/**
 * @see https://github.com/octokit/types.ts/blob/master/src/generated/Endpoints.ts
 */
import { FigmaKitResponse } from './FigmaKitResponse';
declare type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
declare type SuccessStatuses = 200 | 201 | 202 | 204;
declare type RedirectStatuses = 301 | 302;
declare type EmptyResponseStatuses = 201 | 204;
declare type ExtractResponseContentKey<T> = 'content' extends keyof T ? {
    [K in keyof T['content']]: T['content'][K];
}[keyof T['content']] : T;
declare type SuccessResponseDataType<Responses> = {
    [K in SuccessStatuses & keyof Responses]: ExtractResponseContentKey<Responses[K]> extends never ? never : FigmaKitResponse<ExtractResponseContentKey<Responses[K]>, K>;
}[SuccessStatuses & keyof Responses];
declare type RedirectResponseDataType<Responses> = {
    [K in RedirectStatuses & keyof Responses]: FigmaKitResponse<unknown, K>;
}[RedirectStatuses & keyof Responses];
declare type EmptyResponseDataType<Responses> = {
    [K in EmptyResponseStatuses & keyof Responses]: FigmaKitResponse<never, K>;
}[EmptyResponseStatuses & keyof Responses];
declare type ExtractRequestParameters<T> = 'parameters' extends keyof T ? UnionToIntersection<{
    [K in keyof T['parameters']]: T['parameters'][K];
}[keyof T['parameters']]> : {};
declare type ExtractRequestRequestBody<T> = 'requestBody' extends keyof T ? UnionToIntersection<{
    [K in keyof T['requestBody']]: T['requestBody'][K];
}[keyof T['requestBody']]> : {};
export declare type FigmaKitRequestParameters<T> = ExtractRequestParameters<T> & ExtractRequestRequestBody<T>;
export declare type ExtractResponses<R> = 'responses' extends keyof R ? SuccessResponseDataType<R['responses']> extends never ? RedirectResponseDataType<R['responses']> extends never ? EmptyResponseDataType<R['responses']> : RedirectResponseDataType<R['responses']> : SuccessResponseDataType<R['responses']> : unknown;
export {};
