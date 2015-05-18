var expect = require('chai').expect,
    fsurl = require('..');
describe('fsurl', function() {
  it('should load', function(done) {
    fsurl()
    done();
  });

  var expected = ["hello", "world"]
  var expectedString = JSON.stringify(expected)
  it('should eaual ' + expectedString, function(done) {
    var test = fsurl(expected)
    var json = JSON.stringify(test)
    expect(json).to.equal(expectedString);
    done();
  });

});
