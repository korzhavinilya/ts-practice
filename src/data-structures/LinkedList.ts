export namespace LinkedListNamespace {
  class Node {
    prev?: Node;
    next?: Node;
    value: number;

    constructor(value: number, prev?: Node, next?: Node) {
      this.value = value;
      this.prev = prev;
      this.next = next;
    }
  }

  class LinkedList {
    head?: Node;
    tail?: Node;
    length: number;

    constructor() {
      this.length = 0;
    }

    unshift(value: number) {
      const newNode = new Node(value);
      if (this.head) {
        newNode.next = this.head;
      }
      this.head = newNode;
    }

    push(value: number) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
      } else {
        let node = this.head;
        while (node.next) {
          node = node.next;
        }
        node.next = newNode;
      }
      this.length++;
    }

    shift() {
      if (this.head) {
        this.head = this.head.next;
      }
    }

    pop() {
      if (this.head) {
        let node = this.head;
        while (node.next?.next) {
          node = node.next;
        }
        node.next = undefined;
      }
    }

    removeDuplicates() {
      if (this.head) {
        const uniqueValues: number[] = [];
        let prevUniqueNode: Node | undefined = this.head;
        let node: Node | undefined = this.head;
        uniqueValues.push(node.value);
        while (node) {
          node = node?.next;
          if (node?.value && uniqueValues.indexOf(node.value) === -1) {
            uniqueValues.push(node.value);
            prevUniqueNode = node;
          } else if (node?.next && prevUniqueNode) {
            prevUniqueNode.next = node.next;
          } else if (prevUniqueNode) {
            prevUniqueNode.next = undefined;
          }
        }
      }
    }

    reverse() {
      if (this.head) {
        let prev: Node | undefined = undefined;
        let current: Node | undefined = this.head;
        let next: Node | undefined = undefined;

        while (current) {
          next = current.next;
          current.next = prev;
          prev = current;
          current = next;
        }
        this.head = prev;
      }
    }

    print() {
      if (!this.head) {
        console.log(null);
      } else {
        const values: number[] = [];
        let node = this.head;
        values.push(node.value);
        while (node.next) {
          node = node.next;
          values.push(node.value);
        }
        console.log(values);
      }
    }
  }

  const list = new LinkedList();
  // list.push(3);
  // list.push(4);
  // list.unshift(2);
  // list.unshift(1);
  // list.shift();
  // list.pop();
  // list.push(1);
  // list.push(4);
  // list.push(1);
  // list.push(4);
  // list.push(1);
  // list.push(4);
  // list.removeDuplicates();

  list.push(1);
  list.push(2);
  list.push(3);
  list.reverse();

  list.print();
}
