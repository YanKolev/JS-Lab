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
// console.log(fruits.length); //3 Returns the length of an array(number of array elements)
// length property is always one more than highest array index
// console.log(fruits.sort()); // BAM>ABM sors the array

// console.log(fruits[0]); //access of the first element
// console.log(fruits[fruits.length - 1]); //Accessing the last array element

// to loop through an array- for loop is used
let fLen = fruits.length;
const text = 'I eat ';

for (let i = 0; i < fLen; i++) {
  // console.log(text + fruits[i]);
}

// fruits.push('Lemon'); adds one element at tbe end
// fruits[fruits.length] = 'Lemon';  Also adds the elemnt at the end
// console.log(fruits);
//  ARRAYS > USE NUMBERED INDEXES
// OBJECTS > USE NAMED INDEXES

//nested arrays- an array inside of an array, we can still access them
const a = [
  ['A', 'B'],
  [1, 2],
];
// console.log(a[0][0]); //gets A
// console.log(a[0][1]); //gets B
// console.log(a[1][0]); //gets 1
// console.log(a[1][1]); //gets 2

// Methods

const items = [
  { name: 'Bike', price: 100 },
  { name: 'TV', price: 200 },
  { name: 'Album', price: 10 },
  { name: 'Book', price: 5 },
  { name: 'Phone', price: 500 },
  { name: 'Computer', price: 1000 },
  { name: 'Keyboard', price: 25 },
];

const filteredItems = items.filter(item => {
  return item.price <= 100;
});
// console.log(filteredItems);

// mapp allows you to take one array and convert it to new array, so the items in it are going to look slightly different

const itemNames = items.map(item => {
  return item.name; //price
});
// console.log(itemNames);

//find a single object in an array- true or false- returns the 1st item that is true for the statement
const foundItem = items.find(item => {
  return item.name === 'Book';
});
// console.log(foundItem);

//forEach-it does not return anything- hence we do need retun block
items.forEach(item => {
  // console.log(item.name);
});

//some- returns true or false
const hasInexpensiveItems = items.some(item => {
  return item.price <= 0; // will return false, cause there s no free item
});
// console.log(hasInexpensiveItems);

//every- it will check if every single item matches the condition
const hasInexpensiveItems2 = items.every(item => {
  return item.price <= 100; // false
  //if its 1000  TRUE all the items are less than 1000 items
});
// console.log(hasInexpensiveItems2);

//reduce
const total = items.reduce((currentTotal, item) => {
  return item.price + currentTotal;
}, 0);
// console.log(total);
// returns the function on every single item on the array -> currenttotal will be the previous itteration of the array return
// secont parameter, is the item

//includes- uses single aray and returns true/false-> works for simple look in this numbers array

const items2 = [1, 2, 3, 4, 5];
const includesTwo = items2.includes(2);
// console.log(includesTwo);

//---------------- ARRAY METHOD REDUCE -------------

const itemsR = [
  { name: 'Rice', price: 5 },
  { name: 'Book', price: 20 },
  { name: 'Chicken', price: 10 },
  { name: 'Monitor', price: 100 },
];

// let totalPrice = 0;
// itemsR.forEach(item => {
//   totalPrice += item.price;
// });
//can be used for shopping cart that can total all the items

const totalPrice = itemsR.reduce((total, item) => {
  console.log(`Total: ${total}`);
  console.log(`Item: ${item.price}`);
  return total + item.price;
}, 0);

console.log(totalPrice);
// reduce takes 2 parameters- function( we are using simple arrow function, second parameter- starting point- 0, )
// the function takes couple of different parameters:
//1-the accumulator-thing that we are reducing our value down to (we are trying to reduce every item into a price)
//so the total, and then each individual item -fed into first brackets
// 0-the default value is going to be passed to total the very first time we go through our loop
//whatever we return is going to be our total for the next iteration

//  Example

const people = [
  { name: 'Kyle', age: 26 },
  { name: 'John', age: 31 },
  { name: 'Sally', age: 42 },
  { name: 'Jill', age: 42 },
];

// we want to group those people by age, we want to have an object that has value for the different ages
// and people group under that age

const result = people.reduce((groupedPeople, person) => {
  const age = person.age;
  if (groupedPeople[age] == null) groupedPeople[age] = [];
  groupedPeople[age].push(person);
  return groupedPeople;
}, {});

console.log(result);

const numberZ = [13, 2, 5];
const sumZ = numberZ.reduce((total, number) => {
  return total + number;
}, 0);
console.log(sumZ);
