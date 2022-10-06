import fs from 'fs';

const rs = fs.createReadStream(__dirname + '/buffer.ts');

// rs.on('data', (chunk) => {
//   console.log('onData', chunk.toString());
// });

rs.on('readable', () => {
  let chunk: Buffer = rs.read();
  while (chunk) {
    console.log('chunk', chunk.toString());
    chunk = rs.read();
  }
});

// works only with ts-node .\src\index.ts
process.stdin.on('data', (chunk) => {
  const chunkStringified = chunk.toString();
  if (chunkStringified.match('STOP')) {
    process.stdin.pause();

    setTimeout(() => {
      process.stdin.resume();
    }, 5000);
  }

  process.stdout.write(chunkStringified);
});