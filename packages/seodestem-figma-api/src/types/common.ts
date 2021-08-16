// https://stackoverflow.com/a/50375286/206879
type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer I
) => void
  ? I
  : never;

type ExtractRequestParameters<T> = 'parameters' extends keyof T
  ? UnionToIntersection<
      {
        [K in keyof T['parameters']]: T['parameters'][K];
      }[keyof T['parameters']]
    >
  : {};

type ExtractRequestBody<T> = 'requestBody' extends keyof T
  ? UnionToIntersection<
      {
        [K in keyof T['requestBody']]: T['requestBody'][K];
      }[keyof T['requestBody']]
    >
  : {};

export type RequestHeaders = {
  'X-FIGMA-TOKEN'?: string;
  [header: string]: string | number | undefined;
};

type ResponseHeaders = {
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

export type FigmaAPIResponse<T, S extends number = number> = {
  headers: ResponseHeaders;
  status: S;
  url: string;
  data: T;
};

type SuccessStatuses = 200 | 201 | 202 | 204;

type ExtractContentKey<T> = 'content' extends keyof T
  ? {
      [K in keyof T['content']]: T['content'][K];
    }[keyof T['content']]
  : T;

type SuccessResponseDataType<Responses> = {
  [K in SuccessStatuses & keyof Responses]: ExtractContentKey<
    Responses[K]
  > extends never
    ? never
    : FigmaAPIResponse<ExtractContentKey<Responses[K]>, K>;
};

/**
 * type Extract Request
 */
export type ExtractRequest<T> = ExtractRequestParameters<T> &
  ExtractRequestBody<T>;

/**
 * type Extract Response
 */
export type ExtractResponses<R> = 'responses' extends keyof R
  ? SuccessResponseDataType<R['responses']> extends never
    ? never
    : SuccessResponseDataType<R['responses']>
  : unknown;

/**
 * type Methods
 */
export type MethodsMap = {
  delete: 'DELETE';
  get: 'GET';
  patch: 'PATCH';
  post: 'POST';
  put: 'PUT';
};
