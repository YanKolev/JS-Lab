// Write a function that simply repeats the string a given number of times:

// repeatString('hey', 3) // returns 'heyheyhey'
// This function will take two arguments, string and num.

// Use loops to implement repeatString rather than using the builtin String.prototype.repeat which has the same behaviour.

// const repeatString = function (string, num) {
//   //since we need to repeat a string we will need to start with a variable that
//   //holds empty sting

//   let repString = ''; // will store the final repeated string

//   if (num < 0) {
//     return 'ERROR';
//   }

//   for (let i = 0; i < num; i++) {
//     repString += string;
//   }

//   return repString;
// };

// // reverse string function
// const reverseString = function (string) {
//   return string.split('').reverse().join('');
// };

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

// const removeFromArray = function (arr, ...args) {
//   return arr.filter(a => a !== args);
// };

// WORKING VERSION
// const removeFromArray = function (arr, ...args) {
//   let arr2 = arr.filter(a => !args.includes(a));

//   return arr2;
// };

// loop throguh an array in JS
// for (let i = 0l i < arr.length; i++){
//   console.log(arr[i]);
// }

// // remove duplicates from an array
// uniq = [...new setInterval(array)];

// //create a new array in js
// const newArr = new Array();
// const newArr2 = [];
// //how to remove a single element from array
// ///shift - removes first elemetn and returns th removed element

// //how to remove  an element from any position. extends  the array class in javascript and adds the remove index method
// //remoe element at the given inex
// Array.prototype.remove = function (index) {
//   this.splice(index, 1);
// };

// //remoe an element of a certain value with filter
// const arrayOfLetters = ['a', 'b', 'c', 'd', 'e', 'f'];

// const arrayWithoutD = arrayOfLetters.filter(function (letter) {
//   return letter !== 'd';
// });

// // arrayOfLetters is unchanged
// console.log(arrayOfLetters); // ['a', 'b', 'c', 'd', 'e', 'f']

// console.log(arrayWithoutD); // ['a', 'b', 'c', 'e', 'f']

// //Remove an element from an array with a for loop and push

// // Create an empty array
// // Loop through the original array
// // Push to the empty array the elements you want to keep

// const arrayOfLetters2 = ['a', 'b', 'c', 'd', 'e', 'f'];

// const arrayWithoutB = [];

// for (let i = 0; i < arrayOfLetters2.length; i++) {
//   if (arrayOfLetters2[i] !== 'b') {
//     arrayWithoutH.push(arrayOfLetters2[i]);
//   }
// }

// // arrayOfLetters is unchanged
// console.log(arrayOfLetters2); // ['a', 'b', 'c', 'd', 'e', 'f']

// console.log(arrayWithoutB); // ['a', 'c', 'd', 'e', 'f']

/////////////////////////////////////////////////////////////
//Exercise 05 - sumAll
//////////////////////////////////////////////////////////////

//Implement a function that takes 2 positive integers and returns the sum of every integer between (and including) them:

// sumAll(1, 4); // returns the sum of 1 + 2 + 3 + 4 which is 10

// make sure you pay attention to the function parameters
// create a variable to hold the final sum
// loop through the given numbers (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
// on each iteration add the number to the sum
// return the sum after finishing the loop

// const sumAll = function (a, b) {
//   let sum = 0;

//   for (let i = a; i <= b; i++) {
//     sum += i;
//   }
//   return sum;
// };

// need to rework for different cases:
// if first integer is bigger than second- maybe to revert it
// float numbers, negative numbers, arrays, bigint - to throw error

// const sumAll = function (a, b) {
//   let sum = 0;
//   for (let i = a; i <= b; i++) {
//     sum += i;
//   }
//   return sum;
// };

// Do not edit below this line
// module.exports = sumAll;

//positive integers, throw error if its negative,
//variable to hold the final sum
//loop through the given numbers
//for each iteration add the num + sum
//return sum after finishing the loop
// 2 passed, 5 failed ... .needs rework

//  TESTS
// describe("sumAll", () => {
//   test("sums numbers within the range", () => {
//     expect(sumAll(1, 4)).toEqual(10);
//   });
//   test("works with large numbers", () => {
//     expect(sumAll(1, 4000)).toEqual(8002000);
//   });
//   test("works with larger number first", () => {
//     expect(sumAll(123, 1)).toEqual(7626);          NEED to accomodate for bigger number first. and or flip it??
//   });
//   test("returns ERROR with negative numbers", () => {
//     expect(sumAll(-10, 4)).toEqual("ERROR");        IF A is - / negative number  Return "ERROR"
//   });
//   test("returns ERROR with non-integer parameters", () => {
//     expect(sumAll(2.5, 4)).toEqual("ERROR");         IF A is not a number (IF ITS DECIMAL ) Return "ERROR"
//   });
//   test("returns ERROR with non-number parameters", () => {
//     expect(sumAll(10, "90")).toEqual("ERROR");           IF A IS NOT A NUMBER (IF ITS A STRING) RETURN ERROR
//   });
//   test("returns ERROR with non-number parameters", () => {
//     expect(sumAll(10, [90, 1])).toEqual("ERROR");             IF A /B IS NOT A NUMBER (IF ITS A  ARRAY) RETURN ERROR

//   });
// });

// need to make a fucntion that checks all of the requirements and throws an error, if its false to continue with the loop

// My version
// const sumAll = function (a, b) {
//   // let sum = 0;
//   // for (let i = a; i <= b; i++) {
//   //   sum += i;
//   // }
//   // return sum;
//   if (a > b) {
//     // swapping variables with temp variable
//     let a = a;
//     let b = b;
//     let temp;

//     temp = a;
//     a = b;
//     b = temp;
//     //
//   } else if (0 > a || 0 > b) {
//     return "ERROR";
//   } else if (a % 1 === 0 || b % 1 === 0) {
//     return "ERROR";
//   } else if (typeof a === "string" || b === "string") {
//     return "ERROR";
//   } else if (Array.isArray(a) || Array.isArray(b)) {
//     return "ERROR";
//   } else {
//     let sum = 0;
//     for (let i = a; i <= b; i++) {
//       sum += i;
//     }
//     return sum;
//   }
// };

// research and gpt version
// const sumAll = function (a, b) {
//   let sum = 0;

//   // Check if the inputs are valid (non-integer, negative, or non-numeric)
//   if (!Number.isInteger(a) || !Number.isInteger(b)) {
//     return 'ERROR';
//   }
//   if (a < 0 || b < 0) {
//     return 'ERROR';
//   }
//   if (typeof a !== 'number' || typeof b !== 'number') {
//     return 'ERROR';
//   }

//   // Find the range to sum
//   const start = Math.min(a, b);
//   const end = Math.max(a, b);

//   // Calculate the sum
//   for (let i = start; i <= end; i++) {
//     sum += i;
//   }

//   return sum;
// };

// /////////////////////////////////////////////////////////////////////

// Exercise 06 - leapYears
// Create a function that determines whether or not a given year is a leap year. Leap years are determined by the following rules:

// Leap years are years divisible by four (like 1984 and 2004).
// However, years divisible by 100 are not leap years (such as 1800 and 1900) unless they are divisible by 400
// (like 1600 and 2000, which were in fact leap years). (Yes, it's all pretty confusing)

// -- Learn to Program by Chris Pine

// leapYears(2000) // is a leap year: returns true
// leapYears(1985) // is not a leap year: returns false
// Hints
// use an if statement and && to make sure all the conditions are met properly

// const leapYears = function (year) {
//   // TRUE IF year % 4
//   // FALSE IF year % 100 BUT TRUE IF year % 400

//   // if (year % 4 === 0) {
//   //   return console.log('TRUE');
//   // } else year % 100 === 0 && !(year % 400 === 0);
//   // {
//   //   return console.log('FALSE');
//   // }

//   // if (year % 100 === 0 && year % 400 !== 0 && year % 4 === 0) {
//   //   console.log('False');
//   // } else console.log('True');

//   if ((year % 100 !== 0 && year % 4 === 0) || year % 400 === 0) {
//     console.log('true');
//   } else console.log('false');
// };

// // WOOOORKS!
// leapYears(1996);
// module.exports = leapYears;

// TESTS
// const leapYears = require('./leapYears')

// describe('leapYears', () => {
//   test('works with non century years', () => {
//     expect(leapYears(1996)).toBe(true);  //
//   });
//   test.skip('works with non century years', () => {
//     expect(leapYears(1997)).toBe(false); //
//   });
//   test.skip('works with ridiculously futuristic non century years', () => {
//     expect(leapYears(34992)).toBe(true); //
//   });
//   test.skip('works with century years', () => {
//     expect(leapYears(1900)).toBe(false);
//   });
//   test.skip('works with century years', () => {
//     expect(leapYears(1600)).toBe(true);
//   });
//   test.skip('works with century years', () => {
//     expect(leapYears(700)).toBe(false);
//   });
// });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// EX 7
// Exercise 07 - tempConversion
// Write two functions that convert temperatures from Fahrenheit to Celsius, and vice versa:

// convertToCelsius(32) // fahrenheit to celsius, should return 0

// convertToFahrenheit(0) // celsius to fahrenheit, should return 32

// Because we are human, we want the result temperature to be rounded to one decimal place: i.e., convertToCelsius(100) should return 37.8 and not 37.77777777777778.

// This exercise asks you to create more than one function so the module.exports section of the main javascript file looks a little different this time.
// Nothing to worry about, we're just packaging both functions into a single object to be exported.

// WIKI for  formulas : https://en.wikipedia.org/wiki/Conversion_of_scales_of_temperature
// Try to find by yourself on the Internet how to round a number to 1 decimal place in JavaScript. If you struggle, have a look-
// https://stackoverflow.com/questions/7342957/how-do-you-round-to-one-decimal-place-in-javascript

const convertToCelsius = function () {};

const convertToFahrenheit = function () {};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};

// Tests
const { convertToCelsius, convertToFahrenheit } = require('./tempConversion');

describe('convertToCelsius', () => {
  test('works', () => {
    expect(convertToCelsius(32)).toEqual(0);
  });
  test.skip('rounds to 1 decimal', () => {
    expect(convertToCelsius(100)).toEqual(37.8);
  });
  test.skip('works with negatives', () => {
    expect(convertToCelsius(-100)).toEqual(-73.3);
  });
});

describe('convertToFahrenheit', () => {
  test.skip('works', () => {
    expect(convertToFahrenheit(0)).toEqual(32);
  });
  test.skip('rounds to 1 decimal', () => {
    expect(convertToFahrenheit(73.2)).toEqual(163.8);
  });
  test.skip('works with negatives', () => {
    expect(convertToFahrenheit(-10)).toEqual(14);
  });
});
