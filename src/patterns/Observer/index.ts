import { ConcreteObservable } from './ConcreteObservable';
import { ConcreteObserver } from './ConcreteObserver';

export default function main() {
  const observable = new ConcreteObservable();

  const observer1 = new ConcreteObserver('1');
  const observer2 = new ConcreteObserver('2');

  observable.subscribe(observer1);
  observable.subscribe(observer2);

  observable.notify('Action');
}
