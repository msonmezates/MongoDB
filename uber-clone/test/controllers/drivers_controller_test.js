const assert = require('assert');
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../app');
const Driver = mongoose.model('driver');

describe('Drivers controller', () => {
  it('Post to /api/create creates a new driver', done => {
    Driver.count().then(count => {
      request(app)
      .post('/api/create')
      .send({ email: 'test@test.com' })
      .end(() => {
        Driver.count().then(newCount => {
          assert(count+1 === newCount);
          done();
        });
      });
    });
  });
});