let counter = 100;
console.log(counter); // -> 100
{
  counter = 200;
  console.log(counter); // -> 200
}
console.log(counter); // -> 200

// Counter variable, declared at the beginning of the program, is a global variable.
// Throughout the program, also inside the block, we operate on this very variable. A small change in the code is enough for the program to behave completely differently.

// to improve the code we can write it as this:
let counter2 = 100;
console.log(counter); // -> 100
{
  let counter2 = 200;
  console.log(counter); // -> 200
}
console.log(counter2); // -> 100
// the declaration is local (it’s a different scope than global) and all references to the variable with this name inside the block will refer to this local variable.
//  Outside the block, the global variable will still be seen under the same name. Pay attention to the values displayed by the console.

// Shadowing may not only be concerned with the situation in which a local variable covers a global variable. If nested scopes appear (e.g. nested blocks in the case of a let declaration),
// the local variable declared in a more nested block will overshadow the local variable of the same name declared in the external block.

// Shadowing is also present in variable declarations using the word var, and this time the local scope is limited not by the program block, but by the function block.

var counter3 = 100;

function testFunction() {
  var counter = 200;
  console.log(counter3);
}

console.log(counter3); // -> 100
testFunction(); // -> 200
console.log(counter3); // -> 100

// Hoisting:
var height = 180;
console.log(height); // -> 180
console.log(weight); // -> Uncaught ReferenceError: weight is not defined

//In the above example, we forgot to declare the variable weight. The result is obvious: we’re referring to a variable (that is, we’re trying to read its contents) which does not exist. Something like this must end in an error.

//change
var height = 180;
console.log(height); // -> 180
console.log(weight); // -> undefined
var weight = 70;
console.log(weight); // -> 70

//This time there are no errors. Hoisting has worked, and the declaration has been moved by the interpreter to the beginning of the range
//Hoisting only concerns the declaration, not initialization. So the value 70, which we assign to the weight variable, remains on the line where the original declaration is.
//Hoisting unfortunately works a little differently with the let and const declarations.

//Ex 1
let rosePrice = 8;
let rosequantity = 70;
let roseValue = rosePrice * rosequantity;

//Question 1: Write a code that will create variables and initialize them with values of Boolean, Number, BigInt, String, and undefined types using (when possible) literals and constructor functions.
console.log(Boolean('string'));
console.log(Number(42));
console.log(BigInt(42n));
console.log(String('text'));

let isDataValid = true;
console.log(typeof isDataValid);

let firstYear = 2024;
console.log(typeof firstYear);

let big = 123123000000n;
console.log(typeof big);

let name1 = 'Caitlyn';
console.log(typeof name1);

let x = undefined;

////////////////////////////////////// course answers
let b1 = true;
let b2 = Boolean(true);

let n1 = 100;
let n2 = Number(200);

let bi1 = 100n;
let bi2 = BigInt(200);

let s1 = 'Hello';
let s2 = String('Hello');

let u1 = undefined;

//Question 2: Print all values and all types of those values using console.log. Try to use string interpolation to display the value and type at the same time with a single console.log call, e.g. in the following form: 1000 [number].
console.log(b1);
console.log(`${b1}, [${typeof b1}]`);
console.log(`${n1}, [${typeof n1}]`);
console.log(`${bi1}, [${typeof bi1}]`);
console.log(`${s1}, [${typeof s1}]`);
console.log(`${u1}, [${typeof u1}]`);

//Question 3: Carry out a chain of conversions: create a Boolean from a BigInt created from a Number that was created from a String. Start with the value "1234". Is it possible?

let start = '1234';
let startStr = String(start);
let startNum = Numnber(startStr);
let startBig = BigInt(startNum);
let startBoo = Boolean(startBig);

console.log(`${startBoo} [${typeof startBoo}]`); //forgot to add

// version 2 //course provided
let b = Boolean(BigInt(Number('1234')));
console.log(`${b} [${typeof b}]`);

//Question 4: Try adding two values of the same type and check the result type. Try it for all primitive types.

// const wa = 'test';
// const sm = 'text';
// console.log(wa + sm);

let b0 = true + false;
let n = 100 + 200;
let bi = 100n + 200n;
let s = 'he' + 'llo';
let u = undefined + undefined;

console.log(`${b0} [${typeof b0}]`); // !! number
console.log(`${n} [${typeof n}]`);
console.log(`${bi} [${typeof bi}]`);
console.log(`${s} [${typeof s}]`);
console.log(`${u} [${typeof u}]`); // !!! number

//Question 5: Try adding two values of different types and check the results.
let sumV = 100 + false;
console.log(`${sumV} [${typeof sumV}]`);
//Question 6: Try to modify the line const str1 = 42 + "1"; to get the result 43 (without removing the quotes around 1).
const str1 = 42 + '1';
//const str1 = 42 + Number('1');
console.log(str1);
//Course variant = const str = 42 + + "1";
