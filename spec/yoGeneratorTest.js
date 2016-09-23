var path = require('path')
var expect = require('chai').expect

var yoTest = require(path.join(__dirname, '..', './yoGeneratorTest.js'))
var reverseString = yoTest.reverseString
var fizzBuzz = yoTest.fizzBuzz

describe('reverseString(str)', function () {
  'use strict'

  it('exists', function () {
    expect(reverseString).to.be.a('function')
  })

  it('reverses a string', function () {
    var output = reverseString('testme')
    expect(output).to.equal('emtset')
  })

})

describe('fizzBuzz()', function () {
  'use strict';

  it('exists', function () {
    expect(fizzBuzz).to.be.a('function')

  })

  it('should return Fizz for multiples of 3', function () {
    var output = fizzBuzz(3)
    expect(output).to.equal('Fizz')
  })

  it('should return Buzz for multiples of 5', function () {
    var output = fizzBuzz(5)
    expect(output).to.equal('Buzz')
  })

  it('should return FizzBuzz for multiples of 3 and 5', function () {
    var output = fizzBuzz(15)
    expect(output).to.equal('FizzBuzz')
  })

  it('should return a number when not multiple of 3 or 5', function () {
    var output = fizzBuzz(4)
    expect(output).to.equal(4)
  })

  it('should return Kittens when number is less than 1', function () {
    var output = fizzBuzz(-3)
    expect(output).to.equal("Kittens")
  })

})