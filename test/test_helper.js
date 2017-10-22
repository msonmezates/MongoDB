const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/users_test');

mongoose.connection
  .once('open', () => console.log('Mongoose is connected'))
  .on('error', (error) => console.warn('Error', error));
