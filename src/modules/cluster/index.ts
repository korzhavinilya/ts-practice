import cluster from 'cluster';
import os from 'os';

const pid = process.pid;

if (cluster.isPrimary) {
  const cpuseCount = os.cpus().length;
  console.log('CPUs', cpuseCount);
  console.log('Master started', pid);

  for (let i = 0; i < cpuseCount - 1; i++) {
    cluster.fork();
  }

  cluster.on('fork', (worker) => {
    console.log(`Worker ${worker.id} is online`);
  });

  cluster.on('exit', (worker) => {
    console.log(`Worker ${worker.id} exited`, worker.process.pid);
    cluster.fork();
  });
}

if (cluster.isWorker) {
  // run worker
  require('./worker.ts');
}
