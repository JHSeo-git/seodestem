import { request } from '@seodestem/figma-api';

export class Core {
  baseUrl: string;
  request: typeof request;
  constructor(baseUrl?: string) {
    this.baseUrl = baseUrl ?? 'https://api.figma.com';
    this.request = request;
  }

  get() {
    request('');
  }
}
