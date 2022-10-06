import carriedFunction from './carriedFunction';
import { cacheFunction } from './cashing';
import { BinaryTree } from '../data-structures/Tree';
import { LinkedList } from '../data-structures/LinkedList';
import composition from './composition';
import { factorial } from './recursion/factorial';
import { fibonacci, recursiveFibonacci } from './recursion/fibonachi';
import {
  binarySearch,
  recursiveBinarySearch,
} from './search/array/binary-search';
import { linearSearch } from './search/array/linear-search';
import { breadthSearch } from './search/graph/breadth-first-search';
import { dijkstraAlgorithm } from './search/graph/dijkstraAlgorithm';
import { bubbleSort, recursiveBubbleSort } from './sort/bubble-sort';
import { quickSort } from './sort/quick-sort';
import { selectionSort } from './sort/selection-sort';
import highOrderFunction from './highOrderFunction';

function main() {
  // const sortedArray = Array(16)
  //   .fill(undefined)
  //   .map((_, index) => index);
  // const unsortedArray = [6, 4, 3, 1, 7, 8, 4, 4, 3, 9];
  // const unsortedArray = [4, 3, 2, 5, 1];
  // const graph = {
  //   a: ["b", "c"],
  //   b: ["f"],
  //   c: ["d", "e"],
  //   d: ["f"],
  //   e: ["f"],
  //   f: ["g"],
  // };
  // const dijkstraGraph = {
  //   a: { b: 2, c: 1 },
  //   b: { f: 7 },
  //   c: { d: 5, e: 2 },
  //   d: { f: 2 },
  //   e: { f: 1 },
  //   f: { g: 1 },
  //   g: {},
  // };

  // console.log("linearSearch", linearSearch(sortedArray, 1000001));
  // console.log("binarySearch", binarySearch(sortedArray, 5));
  // console.log(
  //   "recursiveBinarySearch",
  //   recursiveBinarySearch(sortedArray, 5, 0, sortedArray.length)
  // );
  // console.log("bubbleSort", bubbleSort(unsortedArray));
  // console.log("recursiveBubbleSort", recursiveBubbleSort(unsortedArray, 0));
  // console.log("selectionSort", selectionSort(unsortedArray));
  // console.log('factorial', factorial(3));
  // console.log('recursiveFibonacci', recursiveFibonacci(4));
  // console.log('fibonacci', fibonacci(4));
  // console.log("quickSort", quickSort(unsortedArray));
  // console.log("breadthSearch", breadthSearch(graph, "a", "g"));
  // console.log('dijkstraAlgorithm', dijkstraAlgorithm(dijkstraGraph, 'a', 'g'));
  // const cacheFactorial = cacheFunction(factorial);
  // console.log('cacheFactorial', cacheFactorial(3));
  // console.log('cacheFactorial', cacheFactorial(3));

  // const users = new LinkedList();
  // users.add('Ilya');
  // users.add('Sveta');
  // users.add('Alla');
  // users.add('Nikita');
  // users.print();

  // const numbers = new BinaryTree();
  // numbers.add(5);
  // numbers.add(2);
  // numbers.add(6);
  // numbers.add(2);
  // numbers.add(3);
  // numbers.print();

  // composition();
  // carriedFunction();
  highOrderFunction();
}

export default main;
