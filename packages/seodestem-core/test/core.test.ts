require('dotenv').config();
import { SeoDestemKit } from '../src';

const token = process.env.FIGMA_API_KEY;
const fileKey = 'eKlOIJ2KZu3yv703EaUJPt';

describe('request()', () => {
  it('fetch normal call test', () => {
    const kit = new SeoDestemKit(token);

    return kit
      .request('GET /v1/files/:key', {
        key: fileKey,
      })
      .then(response => {
        console.log(response);
        expect(response.data);
      });
  });
});
