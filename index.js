const addPrependToKeystoneList = function addPrependToKeystoneList(keystone) {
  console.log('Installing keystone.List().prepend...');
  keystone.List.prototype.prepend = require('./prepend');
};

module.exports = addPrependToKeystoneList;
