export default class Stack<T> {
  elements: T[];

  constructor() {
    this.elements = [];
  }

  push(element: T) {
    this.elements.push(element);
    return this;
  }

  pop() {
    return this.elements.pop();
  }

  isEmpty() {
    return !this.elements.length;
  }
}
