import 'reflect-metadata';

function decoratorFactory(label: string) {
  console.log('factory():', label);

  return function (...args: any[]) {
    console.log('decorator():', args);
  };
}

@decoratorFactory('class-A')
@decoratorFactory('class-B')
@decoratorFactory('class-C')
class Person {
  constructor(
    @decoratorFactory('param-A')
    @decoratorFactory('param-B')
    public fname: string
  ) {}

  @decoratorFactory('method-A')
  getName() {
    return this.fname;
  }
}
