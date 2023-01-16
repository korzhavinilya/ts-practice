import { GraphNode } from './graph-node';
import { GraphSearcher, GraphSearchMode } from './graph-searcher';

type EdgeDirection = 'UNDIRECTED' | 'DIRECTED';

export class Graph<T> {
  nodes: Map<T, GraphNode<T>>;
  searcher: GraphSearcher<T>;

  constructor(public edgeDirection: EdgeDirection) {
    this.nodes = new Map();
    this.searcher = new GraphSearcher();
  }

  search(
    source: GraphNode<T>,
    destination: GraphNode<T>,
    mode: GraphSearchMode = 'breadth_first_search'
  ) {
    return this.searcher.search(source, mode);
  }

  dijkstrasAlgorithm(source: GraphNode<T>, destination: GraphNode<T>) {
    return this.searcher.dijkstrasAlgorithm(this.nodes, source, destination);
  }

  addVertex(value: T) {
    const node = this.nodes.get(value);

    if (node) {
      return node;
    }

    const vertex = new GraphNode<T>(value);
    this.nodes.set(value, vertex);
    return vertex;
  }

  addEdge(source: T, destination: T, distance = 0) {
    const sourceNode = this.addVertex(source);
    const destinationNode = this.addVertex(destination);

    sourceNode.addAdjacent(destinationNode, distance);

    if (this.edgeDirection === 'UNDIRECTED') {
      destinationNode.addAdjacent(sourceNode, distance);
    }

    return [sourceNode, destinationNode];
  }

  removeVertex(value: T) {
    const current = this.nodes.get(value);
    if (current) {
      for (const node of this.nodes.values()) {
        node.removeAdjacent(current);
      }
    }
    return this.nodes.delete(value);
  }

  removeEdge(source: T, destination: T) {
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
}
