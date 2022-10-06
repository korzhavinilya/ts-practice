function funcInfo(fn: any) {
  return ` name: ${fn.name} args: ${fn.length}`;
}

const add = (a: number, b: number) => a + b;
const sayHello = () => 'Hello';

console.log(funcInfo(add));
console.log(funcInfo(sayHello));
