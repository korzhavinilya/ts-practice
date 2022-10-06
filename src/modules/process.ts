// creates an event listener to listen for data input, processes the input, and prints the output to the terminal
process.stdin.on('data', (data: string) => {
  data = data.toString().toUpperCase();
  process.stdout.write(data + '\n');
});

process.on('exit', function (code) {
  // Following code will never execute.
  setTimeout(function () {
    console.log('This will not run');
  }, 0);

  console.log('Program ended with code:', code);
});

console.log('process.arch', process.arch);
console.log('process.argv', process.argv);
console.log('process.env', process.env.USERNAME);
console.log('process.pid', process.pid);
console.log('process.platform', process.platform);
console.log('process.release', process.release);
console.log('process.version', process.version);
console.log('process.versions', process.versions);

console.log('process.cwd()', process.cwd());
console.log('process.uptime()', process.uptime());
// console.log('process.kill()', process.kill(process.pid));
console.log('process.exit()', process.exit(1));
