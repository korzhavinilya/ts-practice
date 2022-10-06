let counter = 0;
let instance: FreezeSingleton;

export class FreezeSingleton {
  private a = 1;

  constructor() {
    if (instance) {
      throw new Error('Instance exists');
    }

    instance = this;
  }

  public getInstance() {
    return instance;
  }

  getCount() {
    return counter;
  }

  increment() {
    return ++counter;
  }

  decrement() {
    return --counter;
  }
}

export const freezeSingleton = Object.freeze(new FreezeSingleton());
