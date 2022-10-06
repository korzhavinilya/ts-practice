import { Observable, Observer } from 'rxjs';
import { map } from 'rxjs/operators';
import userResponse, { UserResponse } from '../utils/data/userResponse';
import observer from '../utils/observer';

function main() {
  const observable = new Observable<UserResponse>((subscriber) => {
    subscriber.next(userResponse);
    subscriber.complete();
  }).pipe(
    map((userResponse) => userResponse.data),
    map((users) => users.filter((user) => user.status === 'active')),
    map((users) =>
      Math.floor(users.reduce((sum, user) => sum + user.age, 0) / users.length)
    ),
    map((averageAge) => {
      if (averageAge < 16) throw new Error('Average age is too young');
      else return averageAge;
    })
  );

  const subscription = observable.subscribe(observer);
}

export default main;
