require('dotenv').config();
import { request } from '../src';

const token = process.env.FIGMA_API_KEY;
const fileKey = 'eKlOIJ2KZu3yv703EaUJPt';

describe('request()', () => {
  it('fetch normal call test', () => {
    return request('GET /v1/files/:key', {
      key: fileKey,
      headers: {
        'X-FIGMA-TOKEN': token,
      },
    }).then(response => {
      console.log(response);
      expect(response.data);
    });
  });
});
