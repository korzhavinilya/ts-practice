// Breadth-first search (Поиск в ширину) is a way to navigate a graph from an initial vertex by visiting all the adjacent nodes first.

import Queue from './Queue';
import Stack from './Stack';

export namespace GraphNamespace {
  class Node {
    adjacents: Node[];

    constructor(public value: number) {
      this.adjacents = [];
    }

    addAdjacent(node: Node) {
      this.adjacents.push(node);
    }

    removeAdjacent(node: Node) {
      const index = this.adjacents.indexOf(node);
      if (index !== -1) {
        this.adjacents.splice(index, 1);
      }
    }

    getAdjacents() {
      return this.adjacents;
    }

    isAdjacent(node: Node) {
      return this.adjacents.indexOf(node) > -1;
    }
  }

  type EdgeDirection = 'UNDIRECTED' | 'DIRECTED';

  class Graph {
    nodes: Map<number, Node>;

    constructor(public edgeDirection: EdgeDirection) {
      this.nodes = new Map();
    }

    addVertex(value: number) {
      const node = this.nodes.get(value);

      if (node) {
        return node;
      }

      const vertex = new Node(value);
      this.nodes.set(value, vertex);
      return vertex;
    }

    addEdge(source: number, destination: number) {
      const sourceNode = this.addVertex(source);
      const destinationNode = this.addVertex(destination);

      sourceNode.addAdjacent(destinationNode);

      if (this.edgeDirection === 'UNDIRECTED') {
        destinationNode.addAdjacent(sourceNode);
      }

      return [sourceNode, destinationNode];
    }

    removeVertex(value: number) {
      const current = this.nodes.get(value);
      if (current) {
        for (const node of this.nodes.values()) {
          node.removeAdjacent(current);
        }
      }
      return this.nodes.delete(value);
    }

    removeEdge(source: number, destination: number) {
      const sourceNode = this.nodes.get(source);
      const destinationNode = this.nodes.get(destination);

      if (sourceNode && destinationNode) {
        sourceNode.removeAdjacent(destinationNode);

        if (this.edgeDirection === 'UNDIRECTED') {
          destinationNode.removeAdjacent(sourceNode);
        }
      }

      return [sourceNode, destinationNode];
    }

    *breadthFirstSearch(first: Node) {
      const visitedSet = new Set();
      const visitQueue = new Queue<Node>();

      visitQueue.add(first);

      while (!visitQueue.isEmpty()) {
        const node = visitQueue.remove();
        if (node && !visitedSet.has(node)) {
          yield node;
          visitedSet.add(node);
          node.getAdjacents().forEach((adj) => visitQueue.add(adj));
        }
      }
      return null;
    }

    *depthFirstSearch(first: Node) {
      const visitedSet = new Set();
      const visitStack = new Stack<Node>();

      visitStack.push(first);

      while (!visitStack.isEmpty()) {
        const node = visitStack.pop();
        if (node && !visitedSet.has(node)) {
          yield node;
          visitedSet.add(node);
          node.getAdjacents().forEach((adj) => visitStack.push(adj));
        }
      }
      return null;
    }
  }

  const graph = new Graph('DIRECTED');
  const [first] = graph.addEdge(1, 2);
  graph.addEdge(1, 3);
  graph.addEdge(1, 4);
  graph.addEdge(2, 5);
  graph.addEdge(3, 6);
  graph.addEdge(3, 7);
  graph.addEdge(4, 8);
  graph.addEdge(5, 9);
  graph.addEdge(6, 10);

  const bfs = graph.breadthFirstSearch(first);
  console.log(bfs.next().value?.value); // 1 [2,3,4]
  console.log(bfs.next().value?.value); // 2 [3,4,5]
  console.log(bfs.next().value?.value); // 3 [4,5,6,7]
  console.log(bfs.next().value?.value); // 4 [5,6,7,8]
  console.log(bfs.next().value?.value); // 5 [6,7,8,9]
  console.log(bfs.next().value?.value); // 6 [7,8,9,10]
  console.log(bfs.next().value?.value); // 7 [8,9,10]
  console.log(bfs.next().value?.value); // 8 [9,10]
  console.log(bfs.next().value?.value); // 9 [10]
  console.log(bfs.next().value?.value); // 10 []
  console.log(bfs.next().value?.value); // end

  const dfs = graph.depthFirstSearch(first);
  console.log(dfs.next().value?.value); // 1 [2,3,4]
  console.log(dfs.next().value?.value); // 4 [2,3,8]
  console.log(dfs.next().value?.value); // 8 [2,3]
  console.log(dfs.next().value?.value); // 3 [2,6,7]
  console.log(dfs.next().value?.value); // 7 [2,6]
  console.log(dfs.next().value?.value); // 6 [2,10]
  console.log(dfs.next().value?.value); // 10 [2]
  console.log(dfs.next().value?.value); // 2 [5]
  console.log(dfs.next().value?.value); // 5 [9]
  console.log(dfs.next().value?.value); // 9 []
  console.log(dfs.next().value?.value); // end
}
