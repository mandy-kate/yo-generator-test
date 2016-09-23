var path = require('path');
var expect = require('chai').expect;

var yoTest = require(path.join(__dirname, '..', './yoGeneratorTest.js'))
var reverseString = yoTest.reverseString
var fizzBuzz = yoTest.fizzBuzz

describe('reverseString(str)', function () {
  'use strict';

  it('exists', function () {
    expect(reverseString).to.be.a('function');

  });

  it('reverses a string', function () {
    var output = reverseString('hello');
    expect(output).to.equal('olleh');
  });

});

describe('fizzBuzz()', function () {
  'use strict';

  it('exists', function () {
    expect(fizzBuzz).to.be.a('function');

  });

  it('should return fizz for multiples of three', function () {
    var output = fizzBuzz(3);
    expect(output).to.equal('Fizz');
  });


});