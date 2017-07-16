var common = require('../../initialize');
var assert = common.assert;
var glib = common.glib;

// test for GAS Class
describe('Sugar GAS Class', function() {

  it('GAS.extend() が存在すること', function() {
    assert.equal(glib.GAS.hasOwnProperty('extend'), true);
  });

  it('Sugar.GAS.extend() が正しく設定されること', function() {
    glib.extend({
      namespaces: ['GAS']
    });
    assert.equal(glib.Sugar.GAS.hasOwnProperty('extend'), true);
  });
});
