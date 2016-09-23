'use strict'

function reverseString(str) {
    return str.split("").reverse().join("")
}

function fizzBuzz(number) {
      var output = ""
      if (number % 3 == 0 && number > 0)
        output += "Fizz"
      if (number % 5 == 0 && number > 0)
        output += "Buzz"
      if (number <= 0)
         output += "Kittens"
      return (output || number)
}

if ( typeof module !== "undefined" ) {
  module.exports = {
    reverseString,
    fizzBuzz
    }
}

