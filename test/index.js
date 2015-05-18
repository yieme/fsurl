var expect = require('chai').expect,
    fsurl

describe('fsurl', function() {
  it('should load', function(done) {
    fsurl = require('..')
    done()
  })


  var expectedString = 'fsurl'
  it('should eaual ' + expectedString, function(done) {
    var data = fsurl.sync('./package.json')
    expect(data.name).to.equal(expectedString)
    done()
  })

})
