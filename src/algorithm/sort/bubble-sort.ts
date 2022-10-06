import { swap } from "../utils/swap";

// O(n^2)

function bubbleSort<T>(array: T[]) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
      count += 1;
    }
  }
  console.log("count", count);
  return array;
}

function recursiveBubbleSort<T>(array: T[], index: number) {
  if (index < array.length - 1) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
    return recursiveBubbleSort(array, index + 1);
  }
  return array;
}

export { bubbleSort, recursiveBubbleSort };
