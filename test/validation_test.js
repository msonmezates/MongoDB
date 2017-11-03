const assert = require('assert');
const User = require('../src/user');

describe('Validating records', () => {
  it('requires a user name', () => {
    const user = new User({ name: undefined }); //name:undefined is written to make it fail
    const validateResult = user.validateSync(); //we want it synchronized on purpose
    const { message } = validateResult.errors.name;
    assert(message === 'Name is required.');
  });
});
