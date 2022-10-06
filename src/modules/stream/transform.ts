import { Transform } from 'stream';
import fs from 'fs';

const rs = fs.createReadStream(__dirname + '/buffer.ts');
const ws = fs.createWriteStream(__dirname + '/files/new_file.txt');

const ts = new Transform({
  transform(chunk, encoding, callback) {
    const data = chunk.toString().toUpperCase();
    // this.push(data);
    callback(null, data);
  },
});

rs.pipe(ts).pipe(ws);
