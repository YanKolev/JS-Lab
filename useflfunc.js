// remove duplicates from an array
// uses Set object to automatically filter out duplicate values from an arrayconst
arr = [1, 2, 2, 3, 4, 4, 5];
const unique = [...new Set(arr)];
//console.log(unique);

//swap two variables without temp
//swap values of variables using array destructuring,without temporary variable
let a = 5,
  b = 10;
[a, b] = [b, a];
//console.log(a,b)

//Random number between a range- maximum and minimum
const random = (min, max) => Math.random() * (max - min) + min;
//console.log(random(10,20)); outputs random number between10 and 20

//Flatten a multi-dimensional array
//use flat() with infinity to completely flatten deepy nested arrays
const arr2 = [1, [2, [3, [4, 5]]]];
const flatArray = arr => arr.flat(Infinity);
//console.log(flatArray(arr));

//Short-Circuit Default Value
//this assigns 'default value' because some variable is null. The OR (||) operator helps set a fallback value
const someVariable = null;
const value = someVariable || 'Default Value';
//console.log(value);

//Shuffle an Array-randomly shuffles the elements in an array
const arr = [1, 2, 3, 4, 5];
const shuffle = arr => arr.sort(() => Math.random() - 0.5);
//console.log(shuffle(arr));

//Get the Last element of an array- grab the last element from an array by using negative slicingconst
arr = [10, 20, 30, 40];
const last = arr => arr.slice(-1)[0];
//console.log(last(arr));

// Convert a Number to a String- adding an empty string to a number that converts into a stringconst
num = 123;
const strNum = num + '';
//console.log(strNum);

//Capitalize the first letter of a string + appends the rest of the string as-is.
let str2 = 'javascript';
let capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
//console.log(capitalize(str));

//Check if a string is a palindrome. Splits the strings, reverses the characters and checks if its equal to the original.
//  In this case 'racecar' is a palindrom so it return true.
const str = 'racecar';
const isPalindrome = str => str === str.split('').reverse().join('');
//console.log(isPalindrome(str)); output should be true
