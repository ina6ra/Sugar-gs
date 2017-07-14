var gas = require('gas-mock');

var mymock = gas.globalMockDefault;

exports.assert = require('assert');;
exports.gas = gas;
exports.mymock = mymock;
exports.glib = gas.require('./src', mymock);
