import FigmaApiClient from './FigmaApiClient';
import '@figma/plugin-typings';

const BASE_URL = 'https://api.figma.com';

class FigmaKit {
  token: string;
  client: FigmaApiClient;

  /**
   *
   * @param token
   * initialize figma api client
   */
  constructor(token: string) {
    this.token = token;
    this.client = new FigmaApiClient(BASE_URL);
  }

  getFile() {
    // this.client.request('GET /v1/files/:key')
  }
}

export default FigmaKit;
