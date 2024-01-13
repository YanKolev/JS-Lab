/*When a user inputs a number
Loop from 1 to the entered number
If the current number is divisible by 3 then print "Fizz"
If the current number is divisible by 5 then print "Buzz"
If the current number is divisible by 3 and 5 then print "FizzBuzz"
Otherwise print the current number*/

//getting input from the user:
let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));
//The above code should create a little popup box that asks the user for a number. The input we get back will be stored in our variable answer.
//We wrapped the prompt call in a parseInt function so that a number is returned from the user’s input.

//next subproblem: “Loop from 1 to the entered number”- by using for loop
for (let i = 1; i <= answer; i++) {
    console.log(i);
  }
/*
We declare a variable i and assign it 1: the initial value of the variable i in our loop. 
The second clause, i <= answer is our condition. We want to loop until i is greater than answer. 
The third clause, i++, tells our loop to increment i by 1 every iteration. 
As a result, if the user inputs 10, this loop would print numbers 1 - 10 to the console.*/

/*Most of the time, programmers find themselves looping from 0. Due to the needs of our program, we’re starting from 1*/

//If the current number is divisible by 3, then print Fizz.
for (let i = 1; i <= answer; i++) {
    if (i % 3 === 0) {
      console.log("Fizz");
    } else {
      console.log(i);
    }
  }
/*We are using the modulus operator (%) here to divide the current number by three. 
If you recall from a previous lesson, the modulus operator returns the remainder of a division. 
So if a remainder of 0 is returned from the division, it means the current number is divisible by 3.*/

//If the current number is divisible by 5 then print Buzz.
for (let i = 1; i <= answer; i++) {
    if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
//We have one more subproblem to solve to complete the program: 
//If the current number is divisible by 3 and 5 then print FizzBuzz.
for (let i = 1; i <= answer; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }

/*
The first condition now checks if i is divisible by 3 and 5 instead of checking if i is just divisible by 3. 
We’ve had to do this because if we kept it the way it was, it would run the first condition if (i % 3 === 0), 
so that if i was divisible by 3, it would print Fizz and then move on to the next number in the iteration, 
even if i was divisible by 5 as well.

With the condition if (i % 3 === 0 && i % 5 === 0) coming first, 
we check that i is divisible by both 3 and 5 before moving on to check if
 it is divisible by 3 or 5 individually in the else if conditions.*/


