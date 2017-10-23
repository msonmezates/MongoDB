const mongoose = require('mongoose');
const User = require('../src/user');

describe('Reading users out of the database', () => {
  let joe;

  beforeEach((done) => {
    joe = new User({ name: 'Joe' });
    joe.save();
    .then(() => done());
  });

  it('finds all user with the name of Joe', () => {

  })
})
