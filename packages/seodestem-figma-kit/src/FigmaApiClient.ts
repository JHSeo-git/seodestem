import axios, { AxiosInstance } from 'axios';
import { EndPoints } from './types/Endpoints';

class FigmaApiClient {
  private client: AxiosInstance;

  constructor(baseURL: string) {
    this.client = axios.create({
      baseURL,
    });
  }

  get(endPoinst: EndPoints) {}
}

export default FigmaApiClient;
