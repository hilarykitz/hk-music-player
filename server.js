const express = require('express');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 5000;

app.get('/songs', (req, res) => {
  const path = `./client/public/music/${req.query.song}.mp3`;

  try {
    const stat = fs.statSync(path);
    const fileSize = stat.size;
    const head = {
      'Content-Length': fileSize,
      'Content-Type': 'audio/mp3'
    };
    res.writeHead(200, head);
    fs.createReadStream(path).pipe(res);
  } catch (err) {
    console.warn('Song requested died 30 years ago!');
  }
});

app.listen(port, () => console.log(`Listening on port ${port}`));
