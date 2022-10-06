import { from, Subject, BehaviorSubject } from 'rxjs';

function testSubject() {
  const subject = new BehaviorSubject<number>(0);

  subject.subscribe({
    next: (v) => console.log(`observerA: ${v}`),
  });

  subject.next(1);

  subject.subscribe({
    next: (v) => console.log(`observerB: ${v}`),
  });

  const observable = from([2, 3]);

  observable.subscribe(subject);
}

export default testSubject;
