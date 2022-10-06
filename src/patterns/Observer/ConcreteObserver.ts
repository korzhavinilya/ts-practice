import { Observer } from './Observer';

export class ConcreteObserver implements Observer {
  constructor(private name: string) {}

  next(data: any) {
    console.log(`Observer ${this.name}: ${data}`);
  }
}
