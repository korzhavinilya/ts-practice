import fs from 'fs';

const ws = fs.createWriteStream(__dirname + '/files/new_file.txt');

ws.write('first line \n');
ws.write('second line \n');
ws.write('third line \n');

ws.end('finished');

ws.write('fourth line \n'); // Error write after end
