require('dotenv').config();
import { SeoDestemKit } from '../src';

const token = process.env.FIGMA_API_KEY;
const fileKey = 'eKlOIJ2KZu3yv703EaUJPt';

describe('request()', () => {
  const kit = new SeoDestemKit(token!);

  it('fetch normal call test', () => {
    return kit
      .request('GET /v1/files/:key', {
        key: fileKey,
      })
      .then(response => {
        console.log(response);
        expect(response.data);
      });
  });

  it('local custom call test', () => {
    return kit
      .request('GET /v1/files/:file_key/styles', {
        file_key: fileKey,
      })
      .then(response => {
        console.log(response);
        expect(response.data);
      });
  });
});
