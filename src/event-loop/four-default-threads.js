const crypto = require('crypto');

/**
 * 4 heady operations will be finished in the same time, except the fifth
 *
 * 1: 335 ms
 * 4: 344 ms
 * 2: 374 ms
 * 3: 391 ms
 * 5: 672 ms
 */

const start = Date.now();

crypto.pbkdf2('a', 'b', 100000, 512, 'sha256', () => {
  console.log('1:', Date.now() - start, 'ms');
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha256', () => {
  console.log('2:', Date.now() - start, 'ms');
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha256', () => {
  console.log('3:', Date.now() - start, 'ms');
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha256', () => {
  console.log('4:', Date.now() - start, 'ms');
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha256', () => {
  console.log('5:', Date.now() - start, 'ms');
});
