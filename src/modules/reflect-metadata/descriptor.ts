const obj = {
  name: 'obj',
  foo: 'bar',
};

Object.defineProperty(obj, 'name', {
  value: 'Вася',
  writable: false,
  configurable: true,
  enumerable: true,
});

obj.name = 'Петя';
