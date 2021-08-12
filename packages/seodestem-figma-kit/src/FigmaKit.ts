import '@figma/plugin-typings';

import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { EndPoints, RequestParameters } from './types';

const BASE_URL = 'https://api.figma.com';

type FigmaAPIOptions = AxiosRequestConfig;

export class FigmaKit {
  private client: AxiosInstance;

  constructor(token: string, options?: FigmaAPIOptions) {
    const clientOptions: FigmaAPIOptions = {
      baseURL: options?.baseURL ?? BASE_URL,
      ...options,
    };

    this.client = axios.create(clientOptions);
  }

  request<R extends keyof EndPoints>(
    route: keyof EndPoints | R,
    options?: R extends keyof EndPoints
      ? EndPoints[R]['parameters'] & RequestParameters
      : RequestParameters
  ) {}
}
