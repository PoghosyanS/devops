const express = require('express');
const app = express();
const port = 3000;

app.get('/ping', (req, res) => {
  res.send('pong\n'); // Add a newline character at the end
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

