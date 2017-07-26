var init = require('./initialize');

function set_mock(mymock) {
  if(mymock == null) mymock = init.gas.globalMockDefault;

  var mock = init.gas.require(__dirname+'/src', mymock);
  mock.Sugar.GAS = mock.GAS;
  delete(mock.GAS);

  return mock;
}

module.exports = {set_mock};
