import 'reflect-metadata';

function setMetadata(target, name) {
  Reflect.defineMetadata('key', 'some value', target, name);
}

class Person {
  @setMetadata
  public fname: string;

  constructor(fname: string) {
    this.fname = fname;
  }

  getMetadata() {
    return Reflect.getMetadata('key', this, 'fname');
  }
}

const person = new Person('a');
console.log(person.getMetadata());
