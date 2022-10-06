import * as http from 'http';

const pid = process.pid;

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.end(`Worker ${pid} is serving you`);
});

server.listen(PORT, () => {
  console.log(`Server is started on port ${PORT} with pid ${pid}`);
});
