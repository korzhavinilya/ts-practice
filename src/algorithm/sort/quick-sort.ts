// O(log n * n)

function quickSort<T>(array: T[]) {
  if (array.length <= 1) {
    return array;
  }

  let pivotIndex = Math.floor(array.length / 2);
  let pivot = array[pivotIndex];
  let less: T[] = [];
  let greater: T[] = [];

  for (let i = 0; i < array.length; i++) {
    if (i === pivotIndex) {
      continue;
    } else if (array[i] < pivot) {
      less.push(array[i]);
    } else {
      greater.push(array[i]);
    }
  }

  return [...quickSort(less), pivot, ...quickSort(greater)];
}

export { quickSort };
