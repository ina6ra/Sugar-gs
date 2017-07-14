var common = require('./common');
var assert = common.assert;
var gas = common.gas;
var glib = common.glib;

// test for Array Class
describe('Array Class', function() {

  it('unique 関数が存在すること', function() {
    glib.extend({
      namespaces: [Array]
    });
    result = glib.Array.hasOwnProperty('unique');
    assert.equal(result, true);
  });
});
