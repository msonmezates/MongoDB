const assert = require('assert');
const mongoose = require('mongoose');

before(done => {
  mongoose.connect('mongodb://localhost/uber-clone_test', { useNewUrlParser: true });
  mongoose.connection
    .once('open', () => done())
    .on('error', err => console.warn('Warning', err));
});

beforeEach(done => {
  mongoose.connection.collections.drivers.drop()
    .then(() => done())
    .catch(() => done());
});