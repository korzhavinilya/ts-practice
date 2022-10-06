import { Writable } from 'stream';
const data: string[] = [];

const writable = new Writable({
  write(chunk: Buffer, enc, callback) {
    data.push(chunk.toString());
    callback();
  },
});

writable.on('finish', () => {
  console.log('Writing Finished', data);
});

writable.write('This is the stream data 1\n');
writable.write('This is the stream data 2\n');
writable.write('This is the stream data 3\n');

writable.end('End');
