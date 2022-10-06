import fs from 'fs';
import axios from 'axios';

setTimeout(() => {
  console.log('timeout');
});

setImmediate(() => {
  console.log('immediate');
});

axios.get('https://jsonplaceholder.typicode.com/todos/1').then((data) => {
  console.log('axios');
});
