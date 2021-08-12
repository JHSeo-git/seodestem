import { FigmaKit } from '../src/FigmaKit';

const BASE_URL = 'https://api.figma.com';

describe('figmaKit - request()', () => {
  const kit = new FigmaKit(process.env.FIGMA_API_KEY, {
    baseURL: BASE_URL,
  });
  it('get files by key', () => {
    kit.request('GET /v1/files/{key}', {
      key: 'test',
    });
  });
  it('get files key and title', () => {
    kit.request('GET /v1/files/{key}/{title}', {
      key: 'test',
      title: 'test',
    });
  });
});
