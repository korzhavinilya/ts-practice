import axios from 'axios';

export async function convertImage(src: string) {
  return axios
    .get(src, {
      responseType: 'arraybuffer',
    })
    .then(
      (response) =>
        'data:' +
        response.headers['content-type'] +
        ';base64,' +
        Buffer.from(response.data, 'binary').toString('base64')
    );
}
