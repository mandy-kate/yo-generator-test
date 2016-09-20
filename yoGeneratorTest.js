/*! yoGeneratorTest v0.0.0 - MIT license */
'use strict';

function reverseString(str) {
    return str.split("").reverse().join("");
}

if ( typeof module !== "undefined" ) {
  module.exports = reverseString;
}