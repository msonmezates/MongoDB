const assert = require('assert');
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../app');
const Driver = mongoose.model('driver');

describe('Drivers controller', () => {
  it('POST to /api/drivers creates a new driver', done => {
    Driver.countDocuments().then(count => {
      request(app)
        .post('/api/drivers')
        .send({ email: 'test@test.com' })
        .end(() => {
          Driver.countDocuments().then(newCount => {
            assert(count+1 === newCount);
            done();
          });
        });
    });
  });

  it('PUT to /api/driver/:id edits an existing driver', done => {
    const driver = new Driver({ email: 'test@gmail.com', isDriving: false });
    driver.save()
      .then(() => {
        request(app)
          .put(`/api/drivers/${driver._id}`)
          .send({ isDriving: true })
          .end(() => {
            Driver.findOne({ email: 'test@gmail.com' })
              .then(driver => {
                assert(driver.isDriving === true);
                done();
              });
          });
      });
  }); 

  it('DELETE to /api/drivers/:id removes the driver', done => {
    const driver = new Driver({ email: 'test@tt.com' });
    driver.save()
      .then(() => {
        request(app)
          .delete(`/api/drivers/${driver._id}`)
          .end(() => {
            Driver.findOne({ email: 'test@tt.com' })
              .then(driver => {
                assert(driver === null)
                done();
              });
          });
      });
  });
});