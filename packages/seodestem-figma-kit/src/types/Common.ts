// https://stackoverflow.com/a/50375286/206879
export type UnionToIntersection<U> = (
  U extends any ? (k: U) => void : never
) extends (k: infer I) => void
  ? I
  : never;

export type ExtractRequestParameters<T> = 'parameters' extends keyof T
  ? UnionToIntersection<
      {
        [K in keyof T['parameters']]: T['parameters'][K];
      }[keyof T['parameters']]
    >
  : {};

export type ExtractRequestRequestBody<T> = 'requestBody' extends keyof T
  ? UnionToIntersection<
      {
        [K in keyof T['requestBody']]: T['requestBody'][K];
      }[keyof T['requestBody']]
    >
  : {};

// export type ExtractResponses<T> = 'responses' extends keyof T
//   ? UnionToIntersection<
//       {
//         [K in keyof T['responses']]: T['responses'][K];
//       }[keyof T['responses']]
//     >
//   : {};
