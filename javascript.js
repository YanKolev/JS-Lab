/*const myArray = ["I", "love", "chocolate","frogs"];
const madeAstring = myArray.join(" ");
console.log(madeAstring);*/
//function to change Array into a string

/*const myNumber = Math.random();
console.log(myNumber);*/
//function to log random number

/*const myArray = ["I", "love", "chocolate","frogs"];
const madeAstring = myArray.join(" ");
console.log(madeAstring);

const madeAnotherString = myArray.join();
console.log(madeAnotherString);*/
//Strings with optional parameters

/*function hello(name = "Chris"){
  console.log(`Hello ${name}!`);
}
hello("Ari");
hello();*/
//function that specifies default values by adding =

//Nameless function can be used to receive another function
//as a parameter, ex:
/*
(function(){
  alert("Hello");
});*/

//Run code when user types into a text box- addEventListener()
//this function expects 2 parameters:
//name of the event to listen for(ex-keydown), function to run when the event happens

/*ORIGINAL FUNCTION: 

function logKey(event){
  console.log (`You pressed "$"{event.key}".`);
}
textBox.addEventListener("keydown", logKey);*/

/*ANONYMOUS FUNCTION VARIATION:
textBox.addEventListener("keydown", function(event){
  console.log(`You pressed "${event.key}".`);
});*/

//ARROW FUNCTIONS
/*textBox.addEventListener("keydown",(event)=>{
  console.log(`You pressed "${event.key}".`);
});*/

//function containing one return statemet->can implicitly return the expression
/*const originals = [1, 2, 3];
const doubled = originals.map(item => item * 2);
console.log(doubled);*/

/*Map function basically does this: 

function doubleItem(item){
  return item * 2;
}*/

//Function exercise
/*const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");

textBox.addEventListener("keydown", (event) => {
  output.textContent = `You pressed "${event.key}".`;
});*/

//function favoriteAnimal(animal){
//  return animal + " is my favorite animal!"
//}

//console.log(favoriteAnimal('Bear'))

/*
A parameter is the variable listed inside the parentheses in the function declaration (it’s a declaration time term).
An argument is the value that is passed to the function when it is called (it’s a call time term).
*/

/*Arrow functions are handy for simple actions, especially for one-liners. They come in two flavors:

Without curly braces: (...args) => expression – the right side is an expression: the function evaluates it and returns the result. Parentheses can be omitted, if there’s only a single argument, e.g. n => n*2.
With curly braces: (...args) => { body } – brackets allow us to write multiple statements inside the function, but we need an explicit return to return something.*/

/*function add7 (number){
  return number + 7;
}
const result = add7(5);
console.log(result);*/

/*function multifply(a, b){
  return a * b;
}
const result = (10 * 9)
console.log(result);*/

/*function capitalize(str) {
  // Ensure the string is in lowercase and then capitalize the first letter
  const lowercaseStr = str.toLowerCase();
  const capitalized = lowercaseStr.charAt(0).toUpperCase() + lowercaseStr.slice(1);
  return capitalized;
}

// Example usage:
const input1 = "hello"; // All lowercase
const input2 = "WORLD"; // All uppercase
const input3 = "gOoD MoRnInG"; // Mix of uppercase and lowercase

console.log(capitalize(input1)); // Output: "Hello"
console.log(capitalize(input2)); // Output: "World"
console.log(capitalize(input3)); // Output: "Good morning"*/


function lastLetter(str) {
  // Get the last character of the string using str.length - 1
  return str.charAt(str.length - 1);
}

// Example usage:
console.log(lastLetter("abcd")); // Output: "d"
console.log(lastLetter("Hello")); // Output: "o"
console.log(lastLetter("JavaScript")); // Output: "t"

