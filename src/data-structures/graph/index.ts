import { Graph } from './Graph';

const graph = new Graph<string>('DIRECTED');

/**
 * a: [b,c]
 * b: [f]
 * c: [d,e]
 * d: [f]
 * e: [f]
 * f: [g]
 * g: []
 */
const [first] = graph.addEdge('a', 'b', 2);
graph.addEdge('a', 'c', 1);
graph.addEdge('b', 'f', 7);
graph.addEdge('c', 'd', 5);
graph.addEdge('c', 'e', 2);
graph.addEdge('d', 'f', 2);
graph.addEdge('e', 'f', 1);
const [_, last] = graph.addEdge('f', 'g', 1);

// console.dir(graph.nodes, { depth: 999 });

/**
 * a [b,c]
 * b [c,f]
 * c [f,d,e]
 * f [d,e,g]
 * d [e,g,f]
 * e [g,f,f]
 * g [f,f]
 */
// const searchGenerator = graph.search(first, 'breadth_first_search');

/**
 * a [b,c]
 * c [b,d,e]
 * e [b,d,f]
 * f [b,d,g]
 * g [b,d]
 * d [b,f]
 * b [f]
 */
// const searchGenerator = graph.search(first, 'depth_first_search');

/**
 * a []
 * c []
 * e []
 * f []
 * g []
 * d []
 * b []
 */
// const searchGenerator = graph.search(first, last);

// console.log(searchGenerator.next().value?.value);
// console.log(searchGenerator.next().value?.value);
// console.log(searchGenerator.next().value?.value);
// console.log(searchGenerator.next().value?.value);
// console.log(searchGenerator.next().value?.value);
// console.log(searchGenerator.next().value?.value);
// console.log(searchGenerator.next().value?.value);
// console.log(searchGenerator.next().value?.value);

graph.dijkstrasAlgorithm(first, last);
