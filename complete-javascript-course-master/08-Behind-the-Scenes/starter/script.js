'use strict';
//Scoping: how our prgram`s variables are organized and accessed. Where do variables live? or Where can we access a certain variable, and where not?
//Lexical scoping: Scoping is controlled by placement of functions and blocks in code
//Scope of a variable: Region of our code where a certain variable can be accessed.
// 3 types of scope: global scope, function scope, block scope(ES6)

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);
