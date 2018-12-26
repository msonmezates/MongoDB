const express = require('express');
const app = express();

app.get('/api', (req, res) => {
  res.send({ test: 'hi there' })
});

module.exports = app;