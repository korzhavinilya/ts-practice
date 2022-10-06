const n = 1000000;

console.time('array1');
const array1: number[] = [];
for (let i = 0; i < n; i++) {
  array1.push(i);
}
console.timeEnd('array1');

console.time('array2');
const array2 = Array(n)
  .fill('')
  .map((_, index) => index);
console.timeEnd('array2');

console.time('array3');
const array3 = [...Array(n)].map((_, index) => index);
console.timeEnd('array3');

console.time('array4');
const array4 = Array.from({ length: n }, (_, index) => {
  index;
});
console.timeEnd('array4');

console.time('array5');
const array5 = [...Array(n).keys()];
console.timeEnd('array5');
