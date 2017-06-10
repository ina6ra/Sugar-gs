var common = require('./common');
var assert = common.assert;
var gas = common.gas;
var glib = common.glib;

// test for Object Class
describe('Object Class', function() {

  it('toQueryString 関数が存在すること', function() {
    glib.extend({
      namespaces: [Object]
    });
    result = glib.checkFunction_(glib.Object, 'toQueryString');
    assert.equal(result, true);
  });
});
