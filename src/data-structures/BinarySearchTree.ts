export namespace BinarySearchTreeNamespace {
  class Node<T> {
    constructor(
      public value: T,
      public left: Node<T> | null = null,
      public right: Node<T> | null = null
    ) {}
  }

  class BinarySearchTree<T> {
    root: Node<T> | null = null;

    add(car: Car) {}
  }

  class Car {
    constructor(public brand: string, public speed: number) {}
  }

  export function main() {
    const bst = new BinarySearchTree();
    bst.add(new Car('Reno', 300));
  }
}
