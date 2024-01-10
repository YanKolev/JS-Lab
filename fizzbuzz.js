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
