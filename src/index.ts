// import 'reflect-metadata';

// Reflex Proxy

// import fs from 'fs';

// console.log('start');

// setTimeout(() => {
//   console.log('setTimeout 0');
// }, 0);

// fs.readFile(__dirname + '/data.js', 'utf-8', () => {
//   console.log('readFile');
// });

// setImmediate(() => {
//   console.log('setImmediate');

//   setTimeout(() => {
//     console.log('setTimeout 0');
//   }, 0);
// });

// process.nextTick(() => {
//   console.log('nextTick');
// });

// console.log('end');

/**
 * код и event loop работают в одном потоке
 *
 * for, while работают синхронно и могут заблокировать стек
 */

// import './samples';

import './prototype';
