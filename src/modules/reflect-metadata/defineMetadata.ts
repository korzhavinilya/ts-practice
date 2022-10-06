import 'reflect-metadata';

console.log(
  'reflect-metadata imported:',
  typeof Reflect.defineMetadata === 'function'
);

const target = { name: 'Ilya' };

Reflect.defineMetadata('version', 1, target);
Reflect.defineMetadata('info', { props: 1 }, target);
Reflect.defineMetadata('is', 'string', target, 'name');

console.log('target:', target);
console.log('version is', Reflect.getMetadata('version', target));
console.log('info is', Reflect.getMetadata('info', target));
console.log('name is', Reflect.getMetadata('is', target, 'name'));
console.log('missing', Reflect.getMetadata('missing', target));

console.log(Reflect.getMetadataKeys(target));
console.log(Reflect.getMetadataKeys(target, 'name'));
