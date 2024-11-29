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

// const removeFromArray = function (arr, ...args) {
//   return arr.filter(a => a !== args);
// };

// WORKING VERSION
const removeFromArray = function (arr, ...args) {
  let arr2 = arr.filter(a => !args.includes(a));

  return arr2;
};

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

sumAll(1, 4); // returns the sum of 1 + 2 + 3 + 4 which is 10

// make sure you pay attention to the function parameters
// create a variable to hold the final sum
// loop through the given numbers (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
// on each iteration add the number to the sum
// return the sum after finishing the loop

const sumAll = function (a, b) {
  let sum = 0;

  for (let i = a; i <= b; i++) {
    sum += i;
  }
  return sum;
};

//how to distinguish positive integers? if negative integer is put- break
//variable to hold final sum-
//lop through given numbers????
// each iteration num+sum
//returl finalsum
