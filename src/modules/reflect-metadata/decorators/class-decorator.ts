import 'reflect-metadata';

//Ctor is constructor
interface Ctor {
  new (...args: any[]): any;
}

/**
 * prototype chain is
 * cls is NewCtor
 * cls.__proto__ is NewCtor.proto
 * cls.__proto__.__proto__ is LockedClass
 */
function withInfo<T extends Ctor>(ctor: T): T {
  return class NewCtor extends ctor {
    info() {
      return `An instance of a ${ctor.name}`;
    }
  };
}

function lock(constructor: any) {
  console.log('constructor equals LockedClass', constructor === LockedClass);
  Object.freeze(constructor);
  Object.freeze(constructor.prototype);
}

@lock
@withInfo
class LockedClass {
  static version = '1';

  fn() {
    console.log();
  }
}

const cls = new LockedClass();
console.log((cls as any).info());

// LockedClass.version = '2';
// LockedClass.prototype.fn = () => {};
