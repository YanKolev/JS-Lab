// let counter = 100;
// console.log(counter); // -> 100
// {
//   counter = 200;
//   console.log(counter); // -> 200
// }
// console.log(counter); // -> 200

// // Counter variable, declared at the beginning of the program, is a global variable.
// // Throughout the program, also inside the block, we operate on this very variable. A small change in the code is enough for the program to behave completely differently.

// // to improve the code we can write it as this:
// let counter2 = 100;
// console.log(counter); // -> 100
// {
//   let counter2 = 200;
//   console.log(counter); // -> 200
// }
// console.log(counter2); // -> 100
// // the declaration is local (it’s a different scope than global) and all references to the variable with this name inside the block will refer to this local variable.
//  Outside the block, the global variable will still be seen under the same name. Pay attention to the values displayed by the console.

// Shadowing may not only be concerned with the situation in which a local variable covers a global variable. If nested scopes appear (e.g. nested blocks in the case of a let declaration),
// the local variable declared in a more nested block will overshadow the local variable of the same name declared in the external block.

// Shadowing is also present in variable declarations using the word var, and this time the local scope is limited not by the program block, but by the function block.

// var counter3 = 100;

// function testFunction() {
//   var counter = 200;
//   console.log(counter3);
// }

// console.log(counter3); // -> 100
// testFunction(); // -> 200
// console.log(counter3); // -> 100

// // Hoisting:
// var height = 180;
// console.log(height); // -> 180
// console.log(weight); // -> Uncaught ReferenceError: weight is not defined

// //In the above example, we forgot to declare the variable weight. The result is obvious: we’re referring to a variable (that is, we’re trying to read its contents) which does not exist. Something like this must end in an error.

// //change
// var height = 180;
// console.log(height); // -> 180
// console.log(weight); // -> undefined
// var weight = 70;
// console.log(weight); // -> 70

//This time there are no errors. Hoisting has worked, and the declaration has been moved by the interpreter to the beginning of the range
//Hoisting only concerns the declaration, not initialization. So the value 70, which we assign to the weight variable, remains on the line where the original declaration is.
//Hoisting unfortunately works a little differently with the let and const declarations.

//Ex 1
// let rosePrice = 8;
// let rosequantity = 70;
// let roseValue = rosePrice * rosequantity;

// //Question 1: Write a code that will create variables and initialize them with values of Boolean, Number, BigInt, String, and undefined types using (when possible) literals and constructor functions.
// console.log(Boolean('string'));
// console.log(Number(42));
// console.log(BigInt(42n));
// console.log(String('text'));

// let isDataValid = true;
// console.log(typeof isDataValid);

// let firstYear = 2024;
// console.log(typeof firstYear);

// let big = 123123000000n;
// console.log(typeof big);

// let name1 = 'Caitlyn';
// console.log(typeof name1);

// let x = undefined;

// ////////////////////////////////////// course answers
// let b1 = true;
// let b2 = Boolean(true);

// let n1 = 100;
// let n2 = Number(200);

// let bi1 = 100n;
// let bi2 = BigInt(200);

// let s1 = 'Hello';
// let s2 = String('Hello');

// let u1 = undefined;

// //Question 2: Print all values and all types of those values using console.log. Try to use string interpolation to display the value and type at the same time with a single console.log call, e.g. in the following form: 1000 [number].
// console.log(b1);
// console.log(`${b1}, [${typeof b1}]`);
// console.log(`${n1}, [${typeof n1}]`);
// console.log(`${bi1}, [${typeof bi1}]`);
// console.log(`${s1}, [${typeof s1}]`);
// console.log(`${u1}, [${typeof u1}]`);

//Question 3: Carry out a chain of conversions: create a Boolean from a BigInt created from a Number that was created from a String. Start with the value "1234". Is it possible?

// let start = '1234';
// let startStr = String(start);
// let startNum = Number(startStr);
// let startBig = BigInt(startNum);
// let startBoo = Boolean(startBig);

// console.log(`${startBoo} [${typeof startBoo}]`); //forgot to add

// // version 2 //course provided
// let b = Boolean(BigInt(Number('1234')));
// console.log(`${b} [${typeof b}]`);

//Question 4: Try adding two values of the same type and check the result type. Try it for all primitive types.

// const wa = 'test';
// const sm = 'text';
// console.log(wa + sm);

// let b0 = true + false;
// let n = 100 + 200;
// let bi = 100n + 200n;
// let s = 'he' + 'llo';
// let u = undefined + undefined;

// console.log(`${b0} [${typeof b0}]`); // !! number
// console.log(`${n} [${typeof n}]`);
// console.log(`${bi} [${typeof bi}]`);
// console.log(`${s} [${typeof s}]`);
// console.log(`${u} [${typeof u}]`); // !!! number

// //Question 5: Try adding two values of different types and check the results.
// let sumV = 100 + false;
// console.log(`${sumV} [${typeof sumV}]`);
// //Question 6: Try to modify the line const str1 = 42 + "1"; to get the result 43 (without removing the quotes around 1).
// const str1 = 42 + '1';
// //const str1 = 42 + Number('1');
// console.log(str1);
//Course variant = const str = 42 + + "1";

//Objects
//Question 1: Create an object that describes a train ticket and store it in the ticket variable. The object must have three fields:

// starting station (key name from, give the name of the nearest station in your area as a value);
// end station (key name to, give any other station within 100km as a value);
// the price of the ticket (key name price, give the amount you would like to pay for this ticket as a value).
// The object must be created using curly brackets, in which all created fields will be listed immediately. Then display the values of all fields of the ticket on the console.

// let ticket = {
//   start: 'Berlin',
//   end: 'Munich',
//   price: 250,
// };
// console.log(ticket);
// console.log(`Ticket from ${ticket.start}`);
// console.log(`Ticket to ${ticket.end}`);
// console.log(`Ticket price: ${ticket.price}`);// add it like this

// // Question 2: Declare an empty object and save it to a person variable. Using dot notation, add the name and surname fields to the object by entering your data as values.
// // Try to display the individual fields on the console.

// person = {};
// person.name = 'John';
// console.log(person.name);
// person.surname = 'Smith';
// console.log(person.surname);
// console.log(person);
// console.log(`${person.name} ${person.surname}`);//add it like this

// ///Arrays

// Question 3: We are setting up our small library of books about JavaScript programming. We have three books and want to prepare a list of them.
//  We will store three pieces information about each book: title, author, and number of pages:

// Speaking JavaScript, Axel Rauschmayer, 460;
// Programming JavaScript Applications, Eric Elliott, 254;
// Understanding ECMAScript 6, Nicholas C. Zakas, 352.
// Create an array of three objects representing the books. Each object must have the following properties: title, author, pages.

let books = [
  { title: 'Speaking JavaScript', author: 'Axel Rauschmayer', pages: 460 },
  {
    title: 'Programming JavaScript Applications',
    author: 'Eric Elliott',
    pages: 254,
  },
  {
    title: 'Understanding ECMAScript 6',
    author: 'Nicholas C. Zakas',
    pages: 352,
  },
];

// Question 4: Add a new book to the collection: Learning JavaScript Design Patterns, by Addy Osmani, 254 pages.
// Use the appropriate method to do this, which will attach the book at the end of the array. Display the length of the array and, in turn, all the book names in the collection.

books.push({
  title: 'Learning JavaScript Design Patterns',
  author: 'Addy Osmani',
  pages: 254,
});

//course variant
// let newBook = {
//   title: 'Learning JavaScript Design Patterns',
//   author: 'Addy Osmani',
//   pages: 254,
// };
// books.push(newBook);
// console.log(books);
// console.log(books.length);
// console.log(books[0].title); // Produces name USE THE DOT NOTATION as its an object
// console.log(
//   `book 1: ${books[0].title},book 2: ${books[1].title},book 3: ${books[2].title},book 4: ${books[3].title} `
// );

// Question 5: Use the slice command to copy the last two books to the new array.
// let newBooks = books.slice(2);
// let selectedBooks = books.slice(-2); // course version- same result
// console.log(selectedBooks);

// Question 6: The first book from the collection is lost in unexplained circumstances.
// You have already accepted the loss, so remove it from the array. Which method will you use for this purpose?
//  Display the length of the array and all the names of the books from the collection in turn.
// let updatedBooks = books.shift(0);
// console.log(updatedBooks);
// console.log(books.length);
// console.log(
//   `book 1: ${books[0].title},book 2: ${books[1].title},book 3: ${books[2].title}} `
// );
// Question 7: Display the sum of the pages of all the books from the collection.

// console.log(books[0].pages);
// let pagesCount =
//   books[0].pages + books[1].pages + books[2].pages + books[3].pages;
// console.log(pagesCount);
// console.log(`Total pages:${pagesCount}`); // course answer

// summer = ['June', 'July', 'August'];
// summer.reverse();
// console.log(summer);

////////////////////////////////////////////////////////////////////////////////////////////////////

// Exercise: Using everything you’ve learned up until this point,
// write a script that asks a user about the width, height, and length of a box, then calculate and return to the user the volume of this box.

// As an example, a box with width = 20, height = 10, and length = 50 will have a volume of 10000 (omitting units, as they are not relevant in this scenario).
// For now, assume that the values provided by the user are valid numbers,
// but if you have any ideas on how, you can try to make this script in such a way that it will be resistant to invalid values.

// let name1 = window.prompt('What is your name?', 'John Doe');
// name1 = name1 ? name1 : 'anonymous';
// let age = prompt('Hello ' + name1 + ' how old are you?');
// alert(name1 + ' is ' + age + ' years old');

// let boxW = window.prompt(
//   'Lets calculate this box together!',
//   'Place initial width number'
// );
// boxW = boxW ? boxW : 'NaN';

// let boxH = window.promt(
//   'We got the width, tell us now the height',
//   'Place initial height number'
// );
// boxH = boxH ? boxH : 'NaN';
// let boxL = window.prompt(
//   'Great job, now we need only the length',
//   'Place initial length number'
// );
// boxL = boxL ? boxL : 'NaN';

// let boxTotal = Number(Number(boxW) * Number(boxH) * Number(boxL));

// alert(`The box's volue is: ${boxTotal}`);

// alert(`The box volume is`, Number(boxW * boxH * boxL));

// console.log(boxL);
// let totalV = boxW * boxH * boxL;
// console.log(totalV);
// alert(`Total Volume is  ${totalV}`);

// let contactName = window.prompt('Contact name you want to add', 'John Doe');
// contactName = contactName ? contactName : 'anonymous';
// let contactPhone = window.prompt('Contact phone you want to add ', '080001112');
// contactPhone = contactPhone ? contactPhone : 'Not a number';
// let contactEmail = window.prompt(
//   'Contact email you want to add',
//   'example@example.com'
// );
// contactEmail = contactEmail ? contactEmail : 'Invalid email';

// contacts.push(
//   `{name: ${contactName}, phone: ${contactPhone}, email: ${contactEmail}}`
// );

// let n = false || 'false';

// console.log(n);

//////////////////////////////////////////////////////////////////////
//Control Flow (if statements and loops)
///////////////////////////////////////////////////////////////////////////

// Exercise 1: Write a script that will ask the user to input a number.

// Display the message "Bingo!" when the number is greater than 90 but less than 110, otherwise display the message: "Miss". Use the if statement.

// Exercise 2: Rewrite the code from the previous task, replacing if with a ternary conditional operator.

// Exercise 3: Write a simple calculator application. Ask the user for the following input, one by one: two numbers and a character representing a mathematical operation, one of "+", "-", "*", "/". If the user input is valid, calculate the result and show it to the user. If the user input is invalid, display a message that informs the user that an error has occurred.

// Remember that the value returned by the prompt function is of the type string. You can use the Number.isNaN method to check if you get the correct number after conversion. For example, calling Number.isNaN(10) will return false, while Number.isNaN(NaN) will return true.
