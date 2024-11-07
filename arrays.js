'use strict';
// what are arrays? data structucture that can hold more than one value/list of items
// syntax
// const array_name = [item1, item2];
// const cars = ["Saab", "Volvo", "BMW"];
// spaces and line breaks are not important. declaration can span multiple lines
// you can also create an array, and then provide the elements:
const cars1 = [];
cars1[0] = 'Saab';
cars1[1] = 'Volvo';
cars1[2] = 'BMW';

// you can create an Array and assign values to it using keyword- new
// const cars2 = new Array("Saab", "Volvo", "BMW");
// two examples to exactly the same there is no need to use new Array(), for simplicity use array literal method

// Acccessing Array Elements- you can acces array element by reffering to the index number
// const cars3 = ["Saab", "Volvo", "BMW"];
// let car = cars3[0];
// console.log(cars3);
// arras indexe start with 0, 0 is the first element, 1 is the second element.

// converting array to a string
const fruits = ['Banana', 'Apple', 'Mango'];
// fruits.toString();
// console.log(fruits.toString());

// accessing the full array
// in JS full arra can be accessed by referring to the array name
// console.log(fruits);

//Arrays are special type of objects. typeof operator in JS returns object for arrays,
// but in JS arrays are described as ARRAYS. ARRAYS use numbers to access its element
// const person = ["John", "Doe", 46];
// console.log(person);

// const person = { firstName: "John", lastName: "Doe", age: 46 };
// console.log(person.lastName);

// Array elements can be objects. Because of this you have have variables of different types in the same array.
// you can have objects in an Array, you canhave functions in an array, you have have arrays in an array

// Array properties and Methods
console.log(fruits.length); //3 Returns the length of an array(number of array elements)
// length property is always one more than highest array index
console.log(fruits.sort()); // BAM>ABM sors the array

// console.log(fruits[0]); //access of the first element
console.log(fruits[fruits.length - 1]); //Accessing the last array element

// to loop through an array- for loop is used
let fLen = fruits.length;
const text = 'I eat ';

for (let i = 0; i < fLen; i++) {
  console.log(text + fruits[i]);
}

// fruits.push('Lemon'); adds one element at tbe end
// fruits[fruits.length] = 'Lemon';  Also adds the elemnt at the end
console.log(fruits);
//  ARRAYS > USE NUMBERED INDEXES
// OBJECTS > USE NAMED INDEXES
