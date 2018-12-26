const assert = require('assert');
const request = require('supertest'); //Use supertest to test HTTP calls
const app = require('../app');

describe('The express app', () => {
  it('handles a GET request to /api', done => {
    request(app)
      .get('/api')
      .end((err, response) => {
        assert(response.body.test === 'hi there');
        done();
      });
  });
});