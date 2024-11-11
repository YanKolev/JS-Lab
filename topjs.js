// Write a function that simply repeats the string a given number of times:

// repeatString('hey', 3) // returns 'heyheyhey'
// This function will take two arguments, string and num.

// Use loops to implement repeatString rather than using the builtin String.prototype.repeat which has the same behaviour.

const repeatString = function (string, num) {
  //since we need to repeat a string we will need to start with a variable that
  //holds empty sting

  let repString = ''; // will store the final repeated string

  if (num < 0) {
    return 'ERROR';
  }

  for (let i = 0; i < num; i++) {
    repString += string;
  }

  return repString;
};

// reverse string function
const reverseString = function (string) {
  return string.split('').reverse().join('');
};

// Strings in JavaScript cannot be reversed directly so you're going to have to split it into something else first..
// do the reversal and then join it back together into a string.
