import * as array from './array';
import * as collection from './collection';

var users = [
  { user: 'barney', active: false },
  { user: 'fred', active: false },
  { user: 'pebbles', active: true },
];
const flattenArr = [1, [2, [3, [4]], 5]];

function main() {
  // console.log(collection.countBy(['one', 'two', 'three'], 'length'));
  // array.chunk([1, 2, 3, '4', '5', {}, true, 1.2], 2);
  // array.compact([0, 1, false, 2, '', 3, NaN]);
  // array.concat([1, 2, 3], 'a', 4, false, {}, [5, 6, 7], [[8, 9]]);
  // array.difference([2, 1, 4, 2, 5], [2, 3, 5]);
  // array.differenceBy([2.1, 1.2, 4.3], [2.3, 3.4, 4.7], Math.floor);
  // array.drop([1, 2, 3], 2);
  // array.dropRight([1, 2, 3], 2);
  // array.fill(Array(3), 2);
  // array.findIndex(users, (value) => value.active);
  // array.findIndexByObject(users, users[0]);
  // array.findIndexByKey(users, 'active');
  // array.findLastIndex(users, (value) => !value.active);
  // array.flatten(flattenArr);
  // array.flattenDeep(flattenArr);
  // array.flattenDepth(flattenArr, 3);
  // array.fromPairs([
  //   ['a', 1],
  //   ['b', 2],
  //   ['c', 3],
  // ]);
  // array.initial([1, 2, 3]);
  // array.intersection([2, 1], [2, 3]);
  // array.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
  // array.last([1, 2, 3]);
  // array.lastIndexOf([1, 2, 3, 2], 2);
  // array.nth(['a', 'b', 'c', 'd'], -2);
  // array.pull(['a', 'b', 'c', 'a', 'b', 'c'], 'a', 'c');
  // array.reverse([1, 2, 3]);
  // array.sortedIndex([4, 5, 5, 5, 6], 5);
  // array.sortedLastIndex([4, 5, 5, 5, 6], 5);
  // array.uniq([2, 1, 2]);
  // array.sortedUniq([2, 1, 2]);
  // array.take([1, 2, 3], 2);
  // array.takeRight([1, 2, 3], 2);
  // array.union([2], [1, 2]);
  // const zipped = array.zip(['a', 'b', 'c'], [1, 2, 3], [true, false, true]);
  // array.unzip(zipped);
  // console.log(array.without([2, 1, 2, 3], 1, 2));
}

export default main;
