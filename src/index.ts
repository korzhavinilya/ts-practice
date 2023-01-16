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

// interface Tea {
//   havingRest(): void;
// }

// class ChineseTea implements Tea {
//   havingRest(): void {
//     console.log('chinese tea rest');
//   }
// }

// class EnglishTea implements Tea {
//   havingRest(): void {
//     console.log('english tea rest');
//   }
// }

// interface Coffee {
//   havingRest(): void;
// }

// class ChineseCoffee implements Coffee {
//   havingRest(): void {
//     console.log('chinese coffee rest');
//   }
// }

// class EnglishCoffee implements Coffee {
//   havingRest(): void {
//     console.log('english coffee rest');
//   }
// }

// interface Factory {
//   getTea(): Tea;
//   getCoffee(): Coffee;
// }

// class EnglishFactory implements Factory {
//   getTea(): Tea {
//     return new EnglishTea();
//   }

//   getCoffee(): Coffee {
//     return new EnglishCoffee();
//   }
// }

// class ChineseFactory implements Factory {
//   getTea(): Tea {
//     return new ChineseTea();
//   }

//   getCoffee(): Coffee {
//     return new ChineseCoffee();
//   }
// }

// const factory = new EnglishFactory();
// factory.getCoffee().havingRest();
// factory.getTea().havingRest();
