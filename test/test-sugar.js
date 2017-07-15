var common = require('../initialize');
var assert = common.assert;
var glib = common.glib;

// test for Array Class
describe('Sugar Class', function() {

  it('Sugar.extend() が存在すること', function() {
    assert.equal(glib.Sugar.hasOwnProperty('extend'), true);
  });

  it('Sugar.Array.unique() が存在すること', function() {
    assert.equal(glib.Sugar.Array.hasOwnProperty('unique'), true);
  });

  it('Sugar.Date.getWeekday() が存在すること', function() {
    assert.equal(glib.Sugar.Date.hasOwnProperty('getWeekday'), true);
  });

  it('Sugar.Function のテスト');

  it('Sugar.Number.range() が存在すること', function() {
    assert.equal(glib.Sugar.Number.hasOwnProperty('range'), true);
  });

  it('Sugar.Object.toQueryString() が存在すること', function() {
    assert.equal(glib.Sugar.Object.hasOwnProperty('toQueryString'), true);
  });

  it('Sugar.Range のテスト');
  it('Sugar.RegExp のテスト');

  it('Sugar.String.underscore() が存在すること', function() {
    assert.equal(glib.Sugar.String.hasOwnProperty('underscore'), true);
  });
});
