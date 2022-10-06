import { PassThrough } from 'stream';
import fs from 'fs';

const rs = fs.createReadStream(__dirname + '/buffer.ts');
const ws = fs.createWriteStream(__dirname + '/files/new_file.txt');
const pass = new PassThrough();

pass.on('data', (chunk: Buffer) => {
  const bytes = chunk.length;
  console.log('bytes', bytes);
});

rs.pipe(pass).pipe(ws);

pass.push('push-data\n');
pass.write('write-data\n');
