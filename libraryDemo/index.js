if (process.env.NODE_ENV == 'porduction') {
  module.exports = require('./dist/libDemo.min.js');
} else {
  module.exports = require('./src/libDemo.js');
}