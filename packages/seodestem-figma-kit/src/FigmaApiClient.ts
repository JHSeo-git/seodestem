import axios, { AxiosInstance } from 'axios';
import { EndPoints } from './types/v2';

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
