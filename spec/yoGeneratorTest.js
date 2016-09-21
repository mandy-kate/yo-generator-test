var path = require('path');
var expect = require('chai').expect;

var reverseString = require(path.join(__dirname, '..', './yoGeneratorTest.js'));

describe('reverseString(str)', function () {
  'use strict';

  it('exists', function () {
    expect(reverseString).to.be.a('function');

  });

  it('reverses a string', function () {
    reverseString('abc');
    expect('cba').to.equal('cba');
  });

  it('does something else', function () {
    expect(true).to.equal(false);
  });

});
