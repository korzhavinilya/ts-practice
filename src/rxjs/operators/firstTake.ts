import { first, Observable, take } from 'rxjs';
import observer from '../utils/observer';

function main() {
  const observable = new Observable<number>((subscriber) => {
    subscriber.next();
    subscriber.next(2);
    subscriber.next(3);
  });

  //   const subscription = observable.pipe(first()).subscribe(observer);
  const subscription = observable.pipe(take(1)).subscribe(observer);
}

export default main;
