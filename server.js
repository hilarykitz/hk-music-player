const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/songs', (req, res) => {
  res.sendFile(`/client/public/music/${req.query.song}.mp3`, {
    root: __dirname
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
