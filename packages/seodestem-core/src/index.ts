import { request, RequestHeaders } from '@seodestem/figma-api';

export class SeoDestemKit {
  token: string;
  request: typeof request;
  constructor(token: string) {
    const staticHeaders: RequestHeaders = {
      'X-FIGMA-TOKEN': token,
    };
    this.token = token;
    this.request = request;
  }
}

const kit = new SeoDestemKit('tt');
kit.request('GET /v1/files/:key', { key: 's' });
