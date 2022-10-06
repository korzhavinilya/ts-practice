export default class Queue<T> {
  elements: T[];

  constructor() {
    this.elements = [];
  }

  add(element: T) {
    this.elements.push(element);
    return this;
  }

  remove() {
    return this.elements.shift();
  }

  isEmpty() {
    return !this.elements.length;
  }
}
