/**
 * @see https://github.com/octokit/types.ts/blob/master/src/generated/Endpoints.ts
 */
import { FigmaKitResponse } from './FigmaKitResponse';

// https://stackoverflow.com/a/50375286/206879
type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer I
) => void
  ? I
  : never;

type SuccessStatuses = 200 | 201 | 202 | 204;
type RedirectStatuses = 301 | 302;
type EmptyResponseStatuses = 201 | 204;

type ExtractResponseContentKey<T> = 'content' extends keyof T
  ? {
      [K in keyof T['content']]: T['content'][K];
    }[keyof T['content']]
  : T;

type SuccessResponseDataType<Responses> = {
  [K in SuccessStatuses & keyof Responses]: ExtractResponseContentKey<
    Responses[K]
  > extends never
    ? never
    : FigmaKitResponse<ExtractResponseContentKey<Responses[K]>, K>;
}[SuccessStatuses & keyof Responses];
type RedirectResponseDataType<Responses> = {
  [K in RedirectStatuses & keyof Responses]: FigmaKitResponse<unknown, K>;
}[RedirectStatuses & keyof Responses];
type EmptyResponseDataType<Responses> = {
  [K in EmptyResponseStatuses & keyof Responses]: FigmaKitResponse<never, K>;
}[EmptyResponseStatuses & keyof Responses];

type ExtractRequestParameters<T> = 'parameters' extends keyof T
  ? UnionToIntersection<
      {
        [K in keyof T['parameters']]: T['parameters'][K];
      }[keyof T['parameters']]
    >
  : {};

type ExtractRequestRequestBody<T> = 'requestBody' extends keyof T
  ? UnionToIntersection<
      {
        [K in keyof T['requestBody']]: T['requestBody'][K];
      }[keyof T['requestBody']]
    >
  : {};

export type FigmaKitRequestParameters<T> = ExtractRequestParameters<T> &
  ExtractRequestRequestBody<T>;

export type ExtractResponses<R> = 'responses' extends keyof R
  ? SuccessResponseDataType<R['responses']> extends never
    ? RedirectResponseDataType<R['responses']> extends never
      ? EmptyResponseDataType<R['responses']>
      : RedirectResponseDataType<R['responses']>
    : SuccessResponseDataType<R['responses']>
  : unknown;
