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

const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");

textBox.addEventListener("keydown", (event) => {
  output.textContent = `You pressed "${event.key}".`;
});