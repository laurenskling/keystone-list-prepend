const keystone = require('keystone');

module.exports = function() {
  console.log('Installing keystone.List().prepend...');
  keystone.List.prototype.prepend = require('./prepend');
};
