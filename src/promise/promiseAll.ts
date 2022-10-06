import { log } from './utils/console.time';

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getFruit(name: string) {
  const fruits = {
    pineapple: '🍍',
    peach: '🍑',
    strawberry: '🍓',
  };

  await delay(1000);

  return fruits[name];
}

async function sequentiallyMakeSmoothie() {
  const a = await getFruit('pineapple');
  const b = await getFruit('peach');
  return [a, b];
}

async function parallelMakeSmoothie() {
  const a = getFruit('pineapple');
  const b = getFruit('peach');
  return Promise.all([a, b]);
}

async function parallelFruitLoop() {
  const fruits = ['pineapple', 'peach', 'strawberry'];
  fruits.forEach(async (v) => {
    const fruit = await getFruit(v);
    log(fruit);
    return fruit;
  });
}

async function sequentiallyFruitLoop() {
  const fruits = ['pineapple', 'peach', 'strawberry'];
  for (const f of fruits) {
    const fruit = await getFruit(f);
    log(fruit);
  }
}

async function readAllFruits() {
  const fruits = ['pineapple', 'peach', 'strawberry'];
  //   const smoothie = fruits.map((v) => getFruit(v));
  //   for await (const v of smoothie) {
  //     log(v);
  //   }
  //   for (const v of smoothie) {
  //     log(await v);
  //   }
  const smoothie = await Promise.all(fruits.map((v) => getFruit(v)));
  for (const fruit of smoothie) {
    log(fruit);
  }
}

export {
  sequentiallyMakeSmoothie,
  parallelMakeSmoothie,
  parallelFruitLoop,
  sequentiallyFruitLoop,
  readAllFruits,
};
