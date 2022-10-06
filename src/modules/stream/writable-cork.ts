import fs from 'fs';

const ws = fs.createWriteStream(__dirname + '/files/new_file.txt');

// Buffering written data until uncork them
ws.cork();

ws.write('first line \n');
ws.write('second line \n');
ws.write('third line \n');
ws.write('fourth line \n');

// File wont be updated before use uncork
ws.uncork();
