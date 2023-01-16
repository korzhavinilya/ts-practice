const obj = {
  name: 'obj',
  foo: 'bar',
};

Object.defineProperty(objectt, 'name', {
  value: 'Вася',
  writable: false,
  configurable: true,
  enumerable: true,
});

objectt.name = 'Петя';
