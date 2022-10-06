import { log } from './utils/console.time';
import {
  sequentiallyMakeSmoothie,
  parallelMakeSmoothie,
  parallelFruitLoop,
  sequentiallyFruitLoop,
  readAllFruits,
} from './promiseAll';
import runSyncInAsyncFunc from './run-sync-in-async-func';
import { allRaceComparison } from './race-all';
import { delays } from './delays';

async function main() {
  // allRaceComparison();
  // runSyncInAsyncFunc();
  delays();
  // sequentiallyMakeSmoothie().then(log);
  // parallelMakeSmoothie().then(log);
  // parallelFruitLoop();
  // sequentiallyFruitLoop();
  // readAllFruits();
}

export default main;
