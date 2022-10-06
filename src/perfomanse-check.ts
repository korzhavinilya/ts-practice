console.time('console.time');
for (let i = 0; i < 100; i++) {}
console.timeEnd('console.time');

const start = performance.now();
for (let i = 0; i < 100; i++) {}
const end = performance.now();
console.log('performance.now', end - start);
