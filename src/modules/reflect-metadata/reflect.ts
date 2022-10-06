const target = {
  foo: 'bar',
};

console.log(Reflect.get(target, 'foo'));
console.log(Reflect.has(target, 'foo'));
console.log(Reflect.ownKeys(target));
