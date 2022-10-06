export function allRaceComparison() {
  const foo = [
    new Promise((resolve, reject) => setTimeout(resolve, 222, '🥝')),
    new Promise((resolve, reject) => setTimeout(resolve, 333, '🍏')),
    new Promise((resolve, reject) => setTimeout(resolve, 111, '🍍')),
    new Promise((resolve, reject) => setTimeout(resolve, 444, '🍇')),
  ];

  const bar = [
    new Promise((resolve, reject) => setTimeout(resolve, 222, '🥝')),
    new Promise((resolve, reject) => setTimeout(reject, 333, '🍏')),
    new Promise((resolve, reject) => setTimeout(resolve, 111, '🍍')),
    new Promise((resolve, reject) => setTimeout(resolve, 444, '🍇')),
  ];

  // // Promise.race(foo).then(console.log).catch(console.log);
  // // Promise.all(foo).then(console.log).catch(console.log);

  Promise.race(bar).then(console.log).catch(console.log);
  //   Promise.all(bar).then(console.log).catch(console.log);
}
