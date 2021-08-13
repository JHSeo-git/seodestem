import '@figma/plugin-typings';
import { request } from './request';

import { FigmaKitRequest, RequestParameters } from './types';

const BASE_URL = 'https://api.figma.com';

export class FigmaKit {
  private token: string;
  private defaultOptions: RequestParameters;
  request: FigmaKitRequest;

  constructor(token: string, options?: RequestParameters) {
    this.token = token;
    this.request = request;
    this.defaultOptions = {
      baseURL: options?.baseURL ?? BASE_URL,
      ...options,
    };
  }
}
