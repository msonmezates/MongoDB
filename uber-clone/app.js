const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const app = express();

mongoose.Promise =  global.Promise;

if(process.env.NODE_ENV !== 'test') {
  mongoose.connect('mongodb://localhost/uber-clone', { useNewUrlParser: true });
}

app.use(bodyParser.json());
routes(app);

// Create a middleware
app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message })
});

module.exports = app;