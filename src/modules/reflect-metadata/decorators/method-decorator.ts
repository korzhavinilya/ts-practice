import 'reflect-metadata';

function readonly(target, name, descriptor) {
  console.log(target, name, descriptor);
  descriptor.writable = false;
}

function prefix(target, name, descriptor) {
  console.log(target, name, descriptor);

  return {
    writable: false,
    enumerable: false,
    configurable: false,
    value: () => `v${descriptor.value()}`,
    // value: () => 'lol',
  };
}

class Person {
  fname = 'Ilya';
  lname = 'Korzhavin';

  @readonly
  getFullName() {
    return `${this.fname} ${this.lname}`;
  }

  @prefix
  static getVersion() {
    return '1.0.1';
  }
}

console.log('version', Person.getVersion());
// Person.prototype.getFullName = () => '';
