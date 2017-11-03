const assert = require('assert');
const User = require('../src/user');

describe('Validating records', () => {
  it('requires a user name', () => {
    const user = new User({ name: undefined }); //name:undefined is written to make it fail
    const validateResult = user.validateSync(); //we want it synchronized on purpose
    const { message } = validateResult.errors.name;
    assert(message === 'Name is required.');
  });

  it('requires a user name that must be longer than 2 characters', () => {
    const user = new User({ name: 'Al' });
    const validateResult = user.validateSync();
    const { message } = validateResult.errors.name;
    assert(message === 'Name must be longer than 2 characters.');
  });
});
