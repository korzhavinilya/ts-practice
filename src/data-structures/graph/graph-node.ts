export class GraphNode<T> {
  adjacents: Map<GraphNode<T>, number>;

  constructor(public value: T) {
    this.adjacents = new Map();
  }

  addAdjacent(node: GraphNode<T>, distance: number) {
    this.adjacents.set(node, distance);
  }

  removeAdjacent(node: GraphNode<T>) {
    return this.adjacents.delete(node);
  }

  getAdjacents() {
    return this.adjacents;
  }

  isAdjacent(node: GraphNode<T>) {
    return this.adjacents.has(node);
  }
}
