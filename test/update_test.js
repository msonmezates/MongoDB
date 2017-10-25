const assert = require('assert');
const User = require('../src/user');

describe('Updating records', () => {
  let joe;

  beforeEach((done) => {
    joe = new User({ name: 'Joe' });
    joe.save()
      .then(() => done());
  });

  it('instance type set and save', (done) => {
    joe.set('name', 'Alex');
    joe.save()
      .then(() => User.find({}))  //User.find({}) means look for all users
      .then(users => {
        assert(users.length === 1);
        assert(users[0].name === 'Alex');
        done();
      });
  });
});
