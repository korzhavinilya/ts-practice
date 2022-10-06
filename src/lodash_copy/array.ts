import { Pairs } from './interfaces/Pairs';

function chunk<T>(array: T[], size: number) {
  return array.reduce((acc: T[][], value) => {
    const lastElement = acc[acc.length - 1];
    if (Array.isArray(lastElement) && lastElement.length + 1 <= size) {
      lastElement.push(value);
    } else {
      acc.push([value]);
    }
    return acc;
  }, []);
}

/**
 * * Creates an array with all falsy values removed.
 * The values false, null, 0, "", undefined, and NaN are falsy.
 * @param array
 * @returns
 */
function compact<T>(array: T[]) {
  return array.filter(Boolean);
}

/**
 * Creates a new array concatenating array with any additional arrays and/or values.
 * @param array
 * @param args
 * @returns
 */
function concat<T>(array: T[], ...args: any) {
  return [array, ...args].flatMap((value) => value);
}

/**
 * Creates an array of array values not included in the other given arrays
 * @param array
 * @param values
 * @returns
 */
function difference<T1, T2>(array: T1[], values: T2[]) {
  let result = [...array];
  values.forEach((value) => {
    result = result.filter((resValue) => resValue !== (value as any));
  });
  return result;
}

/**
 * This method is like _.difference except that it accepts iteratee which
 * is invoked for each element of array and values to generate the criterion by which they're compared.
 * @param array
 * @param values
 * @param iteratee
 * @returns
 */
function differenceBy<T1, T2>(
  array: T1[],
  values: T2[],
  iteratee: (value: T1 | T2) => number
) {
  let result = [...array];
  values.forEach((value) => {
    result = result.filter(
      (resValue) => iteratee(resValue) !== iteratee(value)
    );
  });
  return result;
}

function drop<T>(array: T[], shift = 1) {
  return array.slice(shift);
}

function dropRight<T>(array: T[], shift = 1) {
  return array.slice(shift);
}

function fill<T>(array: T[], value: T, start = 0, end?: number) {
  return isArrayCreatedByConstructor(array)
    ? array.fill(value)
    : array.map((item, index) => {
        const length = end ? end : array.length;
        if (index >= start && index < length) {
          return value;
        }
        return item;
      });
}

function isArrayCreatedByConstructor<T>(array: T[]) {
  return array.length !== 0 && !array[0];
}

function findIndex<T>(array: T[], iteratee: (value: T) => boolean) {
  return array.findIndex(iteratee);
}

function findIndexByObject<T>(array: T[], obj: T) {
  return array.findIndex((value) => {
    let isMismatched = false;
    for (const objKey in obj) {
      if (obj[objKey] !== value[objKey]) {
        isMismatched = true;
      }
    }
    return !isMismatched;
  });
}

function findIndexByKey<T>(array: T[], key: keyof T) {
  return array.findIndex((value) => {
    return !!value[key];
  });
}

function findLastIndex<T>(array: T[], iteratee: (value: T) => boolean) {
  let lastIndex = undefined;
  array.forEach((value, index) => {
    if (iteratee(value)) {
      lastIndex = index;
    }
  });
  return lastIndex;
}

function flatten<T>(array: T[]) {
  return array.flatMap((value) => value);
}

function flattenDeep<T>(array: T[]) {
  return array.flatMap((value) =>
    Array.isArray(value) ? flattenDeep(value) : value
  );
}

function flattenDepth<T>(array: T[], depth: number) {
  if (!depth) {
    return array;
  }
  return array.flatMap((value) =>
    Array.isArray(value) ? flattenDepth(value, depth - 1) : value
  );
}

function fromPairs<T extends Pairs>(array: T[]) {
  return array.reduce((acc, value) => ({ ...acc, [value[0]]: value[1] }), {});
}

function initial<T>(array: T[]) {
  return array.slice(0, array.length - 1);
}

function intersection<T>(arrayA: T[], arrayB: T[]) {
  const result: T[] = [];
  arrayA.forEach((value) => {
    if (arrayB.includes(value)) {
      result.push(value);
    }
  });
  return result;
}

function intersectionBy<T>(
  arrayA: T[],
  arrayB: T[],
  iteratee: (value: T) => T
) {
  const result: T[] = [];
  arrayA.forEach((value) => {
    if (arrayB.findIndex((valueB) => iteratee(valueB) !== iteratee(value))) {
      result.push(value);
    }
  });
  return result;
}

function last<T>(array: T[]) {
  return array[array.length - 1];
}

function lastIndexOf<T>(array: T[], value: T) {
  let lastIndex = undefined;
  array.forEach((item, index) => {
    if (item === value) {
      lastIndex = index;
    }
  });
  return lastIndex;
}

/**
 * Gets the element at index n of array. If n is negative, the nth element from the end is returned.
 * @param array
 * @param value
 * @returns
 */
function nth<T>(array: T[], value: number) {
  const length = array.length;
  if (value > length) {
    return array[length - 1];
  } else if (value < 0) {
    return array[length - Math.abs(value)];
  } else {
    return array[value];
  }
}

/**
 * Removes all given values from array.
 * @param array
 * @param values
 */
function pull<T>(array: T[], ...values: T[]) {
  return array.filter((item) => !values.some((value) => value === item));
}

function reverse<T>(array: T[]) {
  const result: T[] = [];
  for (let i = array.length - 1; i >= 0; i--) {
    result.push(array[i]);
  }
  return result;
}

function sortedIndex<T>(array: T[], value: T) {
  for (let i = 1; i < array.length; i++) {
    if (array[i] >= value && array[i - 1] < value) {
      return i--;
    }
  }
  return -1;
}

function sortedLastIndex<T>(array: T[], value: T) {
  for (let i = 1; i < array.length; i++) {
    if (array[i] > value) {
      return i--;
    }
  }
  return -1;
}

function uniq<T>(array: T[]) {
  return array.reduce((acc, val) => {
    if (acc.indexOf(val) === -1) {
      acc.push(val);
    }
    return acc;
  }, []);
}

function sortedUniq<T>(array: T[]) {
  return uniq(array).sort((a, b) => a - b);
}

function take<T>(array: T[], count = 1) {
  return array.slice(0, count);
}

function takeRight<T>(array: T[], count = 1) {
  return count === 0 ? [] : array.slice(-count);
}

/**
 * Creates an array of unique values, in order, from all given arrays using
 */
function union<T>(...arrays: T[]) {
  return uniq(flatten(arrays));
}

/**
 * Creates an array of grouped elements, the first of which contains the first elements of the
 * given arrays, the second of which contains the second elements of the given arrays, and so on.
 */
function zip<T>(...arrays: T[]) {
  const result = [];
  for (let i = 0; i < arrays.length; i++) {
    const subArray = [];
    for (let j = 0; j < arrays.length; j++) {
      subArray[j] = arrays[j][i];
    }
    result.push(subArray);
  }
  return result;
}

/**
 * This method is like _.zip except that it accepts an array of grouped elements and creates an
 * array regrouping the elements to their pre-zip configuration.
 */
function unzip<T>(array: ArrayLike<T>[]) {
  const accObj = {};
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (!accObj[j]) {
        accObj[j] = [];
      }
      accObj[j].push(array[i][j]);
    }
  }
  return Object.keys(accObj).map((key) => accObj[key]);
}

function without<T>(array: T[], ...value: T[]) {
  return array.reduce((acc, val) => {
    if (value.indexOf(val) === -1) {
      acc.push(val);
    }
    return acc;
  }, []);
}

export {
  chunk,
  compact,
  concat,
  difference,
  differenceBy,
  drop,
  dropRight,
  fill,
  findIndex,
  findIndexByObject,
  findIndexByKey,
  findLastIndex,
  flatten,
  flattenDeep,
  flattenDepth,
  fromPairs,
  initial,
  intersection,
  intersectionBy,
  last,
  lastIndexOf,
  nth,
  pull,
  reverse,
  sortedIndex,
  sortedLastIndex,
  uniq,
  sortedUniq,
  take,
  takeRight,
  union,
  zip,
  unzip,
  without,
};
