import { exec, execFile, spawn } from 'child_process';

function execProcess(command: string) {
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.log('error:', error);
    }

    console.log('stdout:', stdout);
    console.log('stderr:', stderr);
  });
}

function execFileFn(command: string, args: string[]) {
  execFile(command, args, (error, stdout, stderr) => {
    if (error) {
      console.log('error:', error);
    }
    console.log('stdout:', stdout);
    console.log('stderr:', stderr);
  });
}

function spawnProcess(command, args) {
  const sProcess = spawn(command, args);
  let fullData = '';
  let dataChunks = 0;

  sProcess.stderr.on('data', (chunk: Buffer) => {
    console.log('stderr:', chunk.toString());
  });

  sProcess.stdout.on('data', (chunk: Buffer) => {
    fullData += chunk;
    dataChunks += 1;
    console.log('stdout:', chunk.toString());
  });

  sProcess.stdout.on('end', () => {
    console.log('end:', fullData);
    console.log('dataChunks:', dataChunks);
  });

  sProcess.on('close', (code) => {
    console.log('child process exited with code', code);
  });
}

// execProcess('node -v');
// execFileFn('node', ['-v']);
// spawnProcess('node', ['-v']);

// spawnProcess('curl', ['https://en.wikipedia.org/wiki/List_of_2017_albums']);
