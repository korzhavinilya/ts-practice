export class ClassicalSingleton {
  private static instance: ClassicalSingleton;
  private counter = 0;

  private constructor() {}

  public static getInstance() {
    if (!this.instance) {
      this.instance = new ClassicalSingleton();
    }

    return this.instance;
  }

  getCount() {
    return this.counter;
  }

  increment() {
    return ++this.counter;
  }

  decrement() {
    return --this.counter;
  }
}
