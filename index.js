module.exports = function(keystone) {
  console.log('Installing keystone.List().prepend...');
  keystone.List.prototype.prepend = require('./prepend');
};
