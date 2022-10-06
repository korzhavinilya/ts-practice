import express from 'express';
import fs from 'fs';

const PORT = 3000;
const app = express();

app.get('/inline', (req, res, next) => {
  const fileStream = fs.createReadStream(`${__dirname}/sample-data.csv`);

  fileStream.on('open', () => {
    // res.set('Content-Disposition', 'inline'); // set by default
    fileStream.pipe(res);
  });

  fileStream.on('error', (err) => {
    next(err);
  });
});

app.get('/download', (req, res, next) => {
  const fileStream = fs.createReadStream(`${__dirname}/sample-data.csv`);

  fileStream.on('open', () => {
    // is used to add Content-Type and Content-Disposition headers to a response.
    // Content-Type : text/csv; charset=utf-8
    // Content-Disposition : attachment; filename="streamed-sample-data.csv"
    res.attachment('streamed-sample-data.csv');
    fileStream.pipe(res);
  });

  fileStream.on('error', (err) => {
    next(err);
  });
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
