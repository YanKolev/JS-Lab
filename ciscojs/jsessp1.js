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
