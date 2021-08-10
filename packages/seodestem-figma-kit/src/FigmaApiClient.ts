import axios, { AxiosInstance } from 'axios';
import { EndPoints } from './types/EndPoints';
import { FigmaKitRequestInterface } from './types/FigmaKitRequestInterface';

type FigmaAPIRoute = keyof EndPoints;

class FigmaApiClient {
  private client: AxiosInstance;

  constructor(baseURL: string) {
    this.client = axios.create({
      baseURL,
    });
  }
}

export default FigmaApiClient;
