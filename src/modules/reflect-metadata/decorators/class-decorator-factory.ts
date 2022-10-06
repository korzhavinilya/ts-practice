import 'reflect-metadata';

function version(version: string) {
  return function (target: any) {
    console.log('target', target);
    target.version = version;
  };
}

@version('v1.0.1')
class Person {
  constructor(public fname: string) {}
}

console.log('version', (Person as any).version);
