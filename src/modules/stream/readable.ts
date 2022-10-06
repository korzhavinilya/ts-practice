import { Readable } from 'stream';

const data = [
  'This is the stream data 1',
  'This is the stream data 2',
  'This is the stream data 3',
  'This is the stream data 4',
  'This is the stream data 5',
];

const readable = new Readable({
  read() {
    if (data.length === 0) {
      this.push(null);
    } else {
      this.push(data.shift());
    }
  },
});

// const readable = Readable.from(data);

readable.on('data', (chunk) => {
  console.log('chunk', chunk.toString());
});
