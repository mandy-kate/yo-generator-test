'use strict'

function reverseString(str) {
    return str.split("").reverse().join("")
}

function fizzBuzz(number) {
      var output = "";
      if (number % 3 == 0)
        output += "Fizz";
      if (number % 5 == 0)
        output += "Buzz";
      return (output || number);
}

if ( typeof module !== "undefined" ) {
  module.exports = {
    reverseString,
    fizzBuzz
    }
}

