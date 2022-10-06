import fs from 'fs';

const rs = fs.createReadStream(__dirname + '/buffer.ts');
const ws = fs.createWriteStream(__dirname + '/files/new_file.txt');

ws.on('close', () => {
  console.log('Writable has been closed');
});

ws.on('error', (err) => {
  console.error('Error occurred in writable', err);
});

ws.on('finish', () => {
  console.log('Writable has been finished');
});

ws.on('pipe', () => {
  console.log('Writable has been piped');
});

ws.on('unpipe', () => {
  console.log('Writable has been unpiped');
});

rs.pipe(ws);

// ws.destroy(new Error('Destroy error'));
