var expect = require('chai').expect;
var GlobalTest = require('../global');

describe('globalTest', function(){
  it('should stick variable to global object', function() {
    var globalValue = GlobalTest();

    expect(globalValue).to.equal(global.evilVar);
  });
});
