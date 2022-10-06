import { Observable } from './Observable';
import { Observer } from './Observer';

export class ConcreteObservable implements Observable {
  private observers: Observer[];

  constructor() {
    this.observers = [];
  }

  subscribe(observer: Observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer: Observer) {
    this.observers = this.observers.filter(
      (subscriber) => subscriber !== observer
    );
  }

  notify(data: any) {
    this.observers.forEach((observer) => observer.next(data));
  }
}
