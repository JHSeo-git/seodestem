import { request } from '@seodestem/figma-api';
export class Core {
  constructor(baseUrl) {
    this.baseUrl = baseUrl !== null && baseUrl !== void 0 ? baseUrl : 'https://api.figma.com';
    this.request = request;
  }

}

//# sourceMappingURL=bundle.esm.js.map