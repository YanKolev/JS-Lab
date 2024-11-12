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

////////////////////////////////////////////////////////////////////

// Exercise 04 - removeFromArray
// Implement a function that takes an array and some other arguments then removes the other arguments from that array:

// removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]
// Hints
// The first test on this one is fairly easy, but there are a few things to think about (or google) here for the later tests:

// you can manipulate the original array you pass into the function call or create a new array that is returned as the result.
// how to remove a single element from an array
// how to deal with multiple optional arguments in a JavaScript function
// For more information, check out MDN's page on function arguments - scroll down to the bit about Array.from or the spread operator. You can also check out MDN's page on rest parameters.

const removeFromArray = function () {};
