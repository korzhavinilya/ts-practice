const buffer1 = Buffer.alloc(3);
const buffer2 = Buffer.from('You');
const buffer3 = Buffer.alloc(3);

buffer1.write('Hey');
buffer3.write('健');

const resultBuffer = Buffer.concat([buffer1, buffer2]);

console.log('buffer with hexagonal codes', resultBuffer);
for (const char of resultBuffer) {
  console.log('decimal code', char);
}

console.log('result', resultBuffer.toString());

console.log('one chinese require at least 3', buffer3);
