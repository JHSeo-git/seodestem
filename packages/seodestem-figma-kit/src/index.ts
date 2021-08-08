import axios, { AxiosInstance } from 'axios';
import '@figma/plugin-typings';

const BASE_URL = 'https://api.figma.com';

class FigmaKit {
  token: string;
  client?: AxiosInstance;

  constructor(token: string) {
    this.token = token;
    this.initialize();
  }

  initialize() {
    this.client = axios.create({
      baseURL: BASE_URL,
    });
  }
}

export default FigmaKit;
