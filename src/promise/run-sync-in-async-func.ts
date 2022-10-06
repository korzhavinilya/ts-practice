import { log } from './utils/console.time';

function codeBlocker1() {
  for (let i = 0; i < 1000000000; i++) {}
  return 'billion loop done';
}

function codeBlocker2() {
  return new Promise((res, rej) => {
    for (let i = 0; i < 1000000000; i++) {}
    res('billion loop done');
  });
}

function codeBlocker2point0() {
  return new Promise((res, rej) => {
    res(codeBlocker1);
  });
}

function codeBlocker3() {
  return Promise.resolve().then(() => {
    for (let i = 0; i < 1000000000; i++) {}
    return 'billion loop done';
  });
}

async function runSyncInAsyncFunc() {
  log('👀 Sync 1');
  // log(codeBlocker1());

  // blocks the sync execution
  // codeBlocker2().then(log);

  // doesn't block
  // codeBlocker2point0()
  //   .then((fn: any) => fn())
  //   .then(log);

  // doesn't block
  // codeBlocker3().then(log);

  // TODO await blocks the sync execution
  // const result = await codeBlocker2();
  // log(result);

  log('👀 Sync 2');
}

export default runSyncInAsyncFunc;
