import { EndPoints } from './EndPoints';
import { FigmaKitResponse } from './FigmaKitResponse';
import { RequestParameters } from './RequestParameters';
import { Route } from './Route';

export type FigmaKitRequest = {
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
