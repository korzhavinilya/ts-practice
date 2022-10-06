import 'reflect-metadata';

function setMetadata(target, name, index) {
  console.log(target, name, index);

  Reflect.defineMetadata('key_' + index, 'some value', target, name);
}

class Person {
  constructor(@setMetadata public fname: string) {}

  getMetadata() {
    return Reflect.getMetadata('key_' + 0, Person);
  }
}

const person = new Person('a');
console.log(person.getMetadata());
