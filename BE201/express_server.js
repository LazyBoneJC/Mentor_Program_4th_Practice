const express = require('express');
const app = express();
const port = 5001;

app.get('/', (req, res) => {
  res.send("Welcome to Express!");
});

app.get('/hello', (req, res) => {
  res.send("Greetings!");
});

app.get('/bye', (req, res) => {
  res.send("Bye!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});