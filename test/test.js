
import { expect, should, assert } from 'chai';

// Set up should, if you're using it
should();
// The functions being tested won't be in
// the same file as the tests, they'll be in
// their own modules and imported into the test file.
function echo(str) {
  return str;
}

// Mocha specific code
describe('echo', function() {
  it('should return a string', function() {
    const str = echo("Hi");
    // str.should.be.a('string');
    // assert.typeOf(str, 'string');
    expect(str).to.be.a('string');
  });
  it('should return "Hi"', function() {
    const str = echo("Hi");
    // str.should.equal("Hi");
    // assert.equal(str, "Hi");
    expect(str).to.equal("Hi");
  });
});
