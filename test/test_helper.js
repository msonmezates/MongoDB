const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

before((done) => { //before is executed only once to make sure mongoose is connected
  mongoose.connect('mongodb://localhost/users_test', { useMongoClient: true });
  mongoose.connection
    .once('open', () => { done(); })
    .on('error', (error) => console.warn('Error', error));
});

//beforeEach() runs every time we need to start a test
beforeEach(done => {
  const { users, comments, blogposts } = mongoose.connection.collections;

  users.drop(() => {
    comments.drop(() => {
      blogposts.drop();
      done();
    });
  });
});
