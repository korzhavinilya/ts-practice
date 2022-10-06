import { Worker } from 'worker_threads';

const num = 40;

const worker = new Worker(__dirname + '/worker.ts', {
  workerData: { num: num },
});

worker.once('message', (result) => {
  console.log(`${num}th Fibonacci Number: ${result}`);
});

worker.on('error', (error) => {
  console.log(error);
});

worker.on('exit', (exitCode) => {
  console.log(exitCode);
});

console.log('Executed in the parent thread');
