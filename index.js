const keystone = require('keystone');

console.log('Installing keystone.List().prepend...');
keystone.List.prototype.prepend = require('./prepend');

module.exports = keystone;
