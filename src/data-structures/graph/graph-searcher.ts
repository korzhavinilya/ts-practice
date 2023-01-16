import Queue from '../Queue';
import Stack from '../Stack';
import { GraphNode } from './graph-node';

export type GraphSearchMode = 'breadth_first_search' | 'depth_first_search';

export class GraphSearcher<T> {
  search(node: GraphNode<T>, mode: GraphSearchMode) {
    if (mode === 'breadth_first_search') {
      return this.breadthFirstSearch(node);
    } else {
      return this.depthFirstSearch(node);
    }
  }

  // TODO finish it
  dijkstrasAlgorithm(
    nodes: Map<T, GraphNode<T>>,
    source: GraphNode<T>,
    destination: GraphNode<T>
  ) {
    const costs = new Map<T, number>();
    const processed: T[] = [];
    let neighbors: GraphNode<T> | undefined;

    for (const node of nodes.values()) {
      if (node !== source) {
        const currentNode = nodes.get(source.value);
        const value =
          currentNode?.adjacents.get(node) || Number.MAX_SAFE_INTEGER;
        costs.set(node.value, value);
      }
    }

    const lowestNodeKey = this.getLowestDistanceNode(costs, processed);
    while (lowestNodeKey) {
      const node = nodes.get(lowestNodeKey);
      if (node) {
        const cost = costs.get(lowestNodeKey);
        const currentNode = nodes.get(source.value);
        neighbors = currentNode?.adjacents;
      }
    }

    return null;
  }

  private *breadthFirstSearch(node: GraphNode<T>) {
    const visitedSet = new Set();
    const visitQueue = new Queue<GraphNode<T>>();

    visitQueue.add(node);

    while (!visitQueue.isEmpty()) {
      const node = visitQueue.remove();
      if (node && !visitedSet.has(node)) {
        yield node;
        visitedSet.add(node);
        const adjacents = node.getAdjacents();
        for (const [key] of adjacents.entries()) {
          visitQueue.add(key);
        }
      }
    }
    return null;
  }

  private *depthFirstSearch(node: GraphNode<T>) {
    const visitedSet = new Set();
    const visitStack = new Stack<GraphNode<T>>();

    visitStack.push(node);

    while (!visitStack.isEmpty()) {
      const node = visitStack.pop();
      if (node && !visitedSet.has(node)) {
        yield node;
        visitedSet.add(node);
        const adjacents = node.getAdjacents();
        for (const [key] of adjacents.entries()) {
          visitStack.push(key);
        }
      }
    }
    return null;
  }

  private getLowestDistanceNode(costs: Map<T, number>, processed: T[]) {
    let lowestCost = Number.MAX_SAFE_INTEGER;
    let lowestNode: T | null = null;

    for (const [key, cost] of costs.entries()) {
      if (cost < lowestCost && !processed.includes(key)) {
        lowestCost = cost;
        lowestNode = key;
      }
    }

    return lowestNode;
  }
}
