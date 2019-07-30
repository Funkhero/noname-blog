const mongoose = require('mongoose');

Promise = require('bluebird');

mongoose.Promise = Promise;

module.exports = function() {
  return mongoose.connect('mongodb://fw-mongo/noname-blog', {
    useNewUrlParser: true,
  });
};
