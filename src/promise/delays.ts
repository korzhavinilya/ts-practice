function plainTimeout(ms: number) {
  setTimeout(() => {
    console.log('waited', ms);
  }, ms);
}

function delayA(ms: number) {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log('waited', ms);
      resolve(undefined);
    }, ms)
  );
}

function delayB(ms: number) {
  return Promise.resolve().then(() =>
    setTimeout(() => {
      console.log('waited', ms);
    }, ms)
  );
}

export async function delays() {
  console.log('dalay start');

  //   plainTimeout(2000);
  //   await delayA(2000);
  await delayB(2000);
  console.log('dalay end');
}
