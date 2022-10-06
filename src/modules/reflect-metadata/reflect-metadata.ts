import 'reflect-metadata';

// The Reflect.metadata() returns a decorator function

function FullNameDecorator(metaValue: string) {
  return Reflect.metadata('returns', metaValue);
}

@Reflect.metadata('version', 1)
class Person {
  constructor(private fname: string, private lname: string) {}

  @FullNameDecorator('string')
  getFullName() {
    return this.fname + ' ' + this.lname;
  }
}

const person = new Person('Ilya', 'Korzhavin');

console.log('Person version', Reflect.getMetadata('version', Person));
console.log(
  'person.getFullName(returns)',
  Reflect.getMetadata('returns', person, 'getFullName')
);
