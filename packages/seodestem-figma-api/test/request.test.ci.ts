require('dotenv').config();
import { request } from '../src';

const token = process.env.FIGMA_API_KEY;

describe('request()', () => {
  it('parameter test', async () => {
    try {
      const response = await request('GET /v1/files/:key', {
        key: '',
        headers: {
          'X-FIGMA-TOKEN': token,
        },
      });

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  });
});
