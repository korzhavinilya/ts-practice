/**
 * hasPairWithSumInSortedArray
 * O(n)
 *
 * hasPairWithSumInUnsortedArray
 * O(n)
 */

const sortedArray = [1, 2, 4, 4];
const unsortedArray = [1, 2, 4, 4];

function hasPairWithSumInSortedArray(array: number[], sum: number) {
  let low = 0;
  let high = array.length - 1;

  while (low < high) {
    const s = array[low] + array[high];

    console.log(`low is ${array[low]}, high is ${array[high]}, sum is ${s}`);

    if (s === sum) {
      return true;
    } else if (s < sum) {
      low += 1;
    } else {
      high -= 1;
    }
  }

  return false;
}

function hasPairWithSumInUnsortedArray(array: number[], sum: number) {
  const comp = new Set<number>();
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    console.log(`value is ${value}`);
    console.dir(comp.values(), { depth: 999 });

    if (comp.has(value)) {
      return true;
    }

    comp.add(sum - value);
  }

  return false;
}

console.log(hasPairWithSumInUnsortedArray(unsortedArray, 8));
