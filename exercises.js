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