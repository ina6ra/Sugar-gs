var mock = require('./initialize');

function set_mock(mymock) {
  if(mymock == null) mymock = mock.gas.globalMockDefault;
  return mock.gas.require(__dirname+'/src', mymock);
}

module.exports = {set_mock};
