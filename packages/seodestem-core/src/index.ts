import { request } from '@seodestem/figma-api';

export class SeoDestemKit {
  token: string;
  request: typeof request;
  constructor(token: string) {
    this.token = token;
    this.request = request.defaults({
      headers: {
        'X-FIGMA-TOKEN': token,
      },
    });
  }
}
