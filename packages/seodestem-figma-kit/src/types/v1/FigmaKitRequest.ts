import { EndPoints } from './EndPoints';
import { FigmaKitResponse } from './FigmaKitResponse';
import { RequestParameters } from './RequestParameters';
import { Route } from './Route';

export type FigmaKitRequest<D extends object = object> = {
  // /**
  //  * Sends a request based on endpoint options
  //  *
  //  * @param {object} endpoint Must set `method` and `url`. Plus URL, query or body parameters, as well as `headers`, `mediaType.{format|previews}`, `request`, or `baseUrl`.
  //  */
  // <T = any, O extends RequestParameters = RequestParameters>(
  //   options: O & {
  //     method?: string;
  //   } & ('url' extends keyof D
  //       ? {
  //           url?: string;
  //         }
  //       : {
  //           url: string;
  //         })
  // ): Promise<FigmaKitResponse<T>>;

  /**
   * Sends a request based on endpoints options
   *
   * @param {string} route Request method + URL. ie. `'GET /../..'`
   * @param {object} [parameters] URL, query or body parameters, headers ...
   */
  <R extends Route>(
    route: keyof EndPoints | R,
    options?: R extends keyof EndPoints
      ? EndPoints[R]['parameters'] & RequestParameters
      : RequestParameters
  ): R extends keyof EndPoints
    ? Promise<EndPoints[R]['responses']>
    : Promise<FigmaKitResponse<any>>;
};
