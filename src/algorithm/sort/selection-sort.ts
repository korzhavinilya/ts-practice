import { swap } from '../utils/swap';

// O(1/2 n^2) => O(n^2)

function selectionSort<T>(array: T[]) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    let indexMin = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[indexMin]) {
        indexMin = j;
      }
      count += 1;
    }
    if (i !== indexMin) {
      swap(array, i, indexMin);
    }
  }
  console.log('count', count);
  return array;
}

export { selectionSort };
