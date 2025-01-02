// first programme of book

//draw as many cats as you want
var drawCats = function (howManyTimes) {
  for (var i = 0; i < howManyTimes; i++) {
    console.log(i + '=^.^=');
  }
};
drawCats(1);

//seconds in an hour
var secondsInAMinute = 60;
var minutesInAnHour = 60;
var secondsInAnHour = secondsInAMinute * minutesInAnHour;
console.log(secondsInAnHour);

//seconds in a day
var hoursInADay = 24;
var secondsInADay = secondsInAnHour * hoursInADay;
console.log(secondsInADay);

//seconds in a year
var daysInAYear = 365;
var secondsinAYear = secondsInADay * daysInAYear;
console.log(secondsinAYear);

//Age in seconds
var age = 34;
var ageInSeconds = age * secondsinAYear;
console.log(ageInSeconds);

//Incrementing and decrementing
// ++ increments by 1, -- decrements by 1;
var highFives = 0;
++highFives;
++highFives;
--highFives;
console.log(highFives);

//To increase the value of a variable by certain amount, you could use this code:
var x = 10;
x = x + 5;
console.log(x);
//in JS you can use the operators += -= to increase a variable by a certain amount
var score = 10;
score += 7;
console.log(score);
score -= 3;
console.log(score);

var balloons = 100;
balloons *= 2;
console.log(balloons);
balloons /= 4;
console.log(balloons);
