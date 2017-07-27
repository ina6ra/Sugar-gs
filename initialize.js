var gas = require('gas-mock');

var mymock = gas.globalMockDefault;

// ソースフォルダの指定はプロジェクトルートからの相対パス
var glib = gas.require('./src', mymock);

glib.Sugar.GAS = glib.GAS;
delete(glib.GAS);

module.exports = {
  assert: require('assert'),
  gas: gas,
  glib: glib
}
