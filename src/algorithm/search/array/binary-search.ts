// O(log n)

function binarySearch<T>(array: T[], item: T) {
  let start = 0;
  let end = array.length - 1;
  let middle = 0;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    const middleElement = array[middle];
    console.log(`mid is ${middle} [${middleElement}]`);

    if (middleElement === item) {
      return middle;
    } else if (middleElement > item) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }

  return -1;
}

function recursiveBinarySearch<T>(
  array: T[],
  item: T,
  start: number,
  end: number
) {
  if (start > end) {
    return -1;
  }

  let middle = Math.floor((start + end) / 2);

  if (item === array[middle]) {
    return middle;
  } else if (item < array[middle]) {
    return recursiveBinarySearch(array, item, start, middle - 1);
  } else {
    return recursiveBinarySearch(array, item, middle + 1, end);
  }
}

export { binarySearch, recursiveBinarySearch };
