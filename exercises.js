//For loop exercise: Print numbers- write a for loop
//that prints the numbers from 1 to 5.
for (let i = 1; i <=5; i++){
    console.log(i);
}

//Write a for loop to calculate sum of even numbers from to 10 and print result.
let sum = 0;
for (let i = 2; i <=10; i +=2){
    sum +=i;
}
console.log("Sum of even numbers: "+ sum);

// Write an if-else statement to check a given number is even or odd and print the result
let number = 7;

if (number % 2 ===0) {
    console.log(number + "is even");
} else {
    console.log(number + "is odd.");
}

//write an if-else statement to determine if a given number is positive, negative or zero.

let num = -3;

if num > 0 {
    console.log(num + " is positive.");
} else if (num < 0){
    console.log(num + "is negative.");
} else {
    console.log(num + "is zero.");
}

//Write a function that takes a nmae as a parameter and returns a greeting message.

function greet(name) {
    return "Hello, " + name + "!";
}
console.log(greet("John"));

//write a function that calcuates the area of a rectangle given its length and width as parameters.

function calculateArea(length, width){
    return length * width;
}
console.log("Area: "+ calculateArea(5,8));

//write a function that takes a number as a parameter and returns its square.
function square(number){
    return number *number;
}
console.log( "Square: "+ square(4));

//Write a function that takes a number as a parameter,
//and returns true if its a prime number, false otherwise.

function isPrime(num){
    if (num <= 1) return false;

    for(let i =2; i <= Math.sqrt(num); i++){
        if (num % i === 0){
            return false;
        }
    }
    return true;
}
console.log("Is 11 a prime number? "+ isPrime(11));

/* Event Handlers and Callbacks:

Event handlers and callback functions often involve the use of the return statement, especially in asynchronous programming.*/
button.addEventListener('click', function() {
    alert('Button clicked!');
});
/*In this example, the anonymous function passed to addEventListener is a callback. It doesn't explicitly use the return statement, but the fact that it executes code in response to an event is a form of "returning" control or a result. Asynchronous functions, promises, and callbacks are essential concepts in JavaScript development.*/
