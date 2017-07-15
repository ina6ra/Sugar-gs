var gas = require('gas-mock');

var mymock = gas.globalMockDefault;

var mymock = gas.globalMockDefault;

// ソースフォルダの指定はプロジェクトルートからの相対パス
var glib = gas.require('./src', mymock);

module.exports = {
  assert: require('assert'),
  gas: gas,
  glib: glib
}
