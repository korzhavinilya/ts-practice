// O(log n * n)

function quickSort<T>(array: T[]) {
  if (array.length <= 1) {
    return array;
  }

  const pivotIndex = Math.floor(array.length / 2);
  const pivot = array[pivotIndex];
  const less: T[] = [];
  const greater: T[] = [];

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
