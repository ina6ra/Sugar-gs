var common = require('../../initialize');
var assert = common.assert;
var glib = common.glib;

// test for GAS Class
describe('Sugar GAS Class', function() {

  var options = {};
  var url = '';
  var result = null;

  // mocha がタイムアウトするまでの時間を延長
  this.timeout(5000);

  it('Sugar.GAS.extend() が正しく設定されること', function() {
    error = (()=>glib.Sugar.GAS.hasOwnProperty('extend'));
    assert.throws(error, /hasOwnProperty/);
    glib.GAS.extend({
      namespaces: ['GAS']
    });
    assert.equal(glib.Sugar.GAS.hasOwnProperty('extend'), true);
  });

  it('GAS.extend() のテスト');

  it('GAS.createUrl() のテスト', function() {
    options = {
      method: 'get',
      payload: {
        q: 'Sugar js',
        oe: 'utf-8',
        ie: ''
      }
    }
    url = 'http://www.google.co.jp/search';
    result = glib.Sugar.GAS.createGetUrl(url, options['payload']);
    assert.equal(result, url+'?q=Sugar%20js&oe=utf-8&ie=');
  });

  it('GAS.fetch() のテスト@GET', function() {
    result = glib.Sugar.GAS.fetch(url, options);
    result = result.getContentText('utf8');
    result = (/<title>([\s\S]*?)<\/title>/i).exec(result);
    assert.equal(result[1], 'Sugar js - Google 検索');
  });

  it('GAS.fetch() のテスト@POST')
});
