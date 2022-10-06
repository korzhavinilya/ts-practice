import { from, Observable, Observer } from 'rxjs';
import { pluck, map, filter, mergeMap } from 'rxjs/operators';
import observer from '../utils/observer';

function main() {
  const data = {
    arr: [1, 2, 3, 4, 5, 6],
  };
  const promise = Promise.resolve(data);
  const observable = from(promise).pipe(
    mergeMap((data) => data.arr),
    filter((value) => value >= 3)
  );

  const subscription = observable.subscribe(observer);
}

export default main;
