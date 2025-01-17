// Complete the function howManydays.
// It accepts 1 parameter month, which means the month of the year.
// Different months have a different number of days as shown in the table below.
// Return the number of days that are in month.
// There is no need for input validation: month will always be greater than 0 and less than or equal to 12.

// +---------------+-------------+
// |    month      |    days     |
// +---------------+-------------+
// |1,3,5,7,8,10,12|     31      |
// +---------------+-------------+
// |4,6,9,11       |     30      |
// +---------------+-------------+
// |2              |     28      |  (Do not consider the leap year)
// +---------------+-------------+

function howManydays(month) {
  var days;
  switch (month) {
    case 2:
      days = 28;
      break;
    case 4:
      days = 30;
      break;
    case 6:
      days = 30;
      break;
    case 9:
      days = 30;
      break;
    case 11:
      days = 30;
      break;

    default:
      days = 31;
  }
  return days;
}

// Variant 2:

function howManydays(month) {
  var days;
  switch (month) {
    case 2:
      days = 28;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      days = 30;

    default:
      days = 31;
  }
  return days;
}

//each month can be aslo written with cases, 1-12;

/////////////////////////////////////////////////////////////////////////////////

// Task
// Complete function padIt, which accepts 2 parameters:

// str: a string representing the string to pad. We will pad it with "*" symbols on its left side and on its right side.
// n: a number indicating how many times to pad the string.
// Behaviour
// You need to write a loop statement within the function that loops n times.
// Each time through the loop it will add one * to str,
// alternating on which side it is padded: the first time will add a * to the left side of str,
// the second time will add a * to the right side, and so on.

// Finally, return the padded string.

function padIt(str, n) {
  let padStr = '';
  let num = 0;
  // let evenStr = String(str).padStart(n, '*');
  // let oddStr = String(str).padEnd(n, '*');
  while (num < n) {
    if (n % 2) {
      return evenStr + oddStr;
    } else {
      return oddStr;
    }
    num++;
  }
  return padStr;
}

padIt('a', 1);

// issues to address
// Incorrect Condition in while Loop

// The loop condition 10 >= num causes the loop to run 11 times, regardless of the input n. It doesn't depend on n, so it doesn't make sense in the context of the function.
// If n is supposed to control how many times the loop executes, you should use num < n instead.
// Unused Variables

// padStart and padEnd are calculated inside the loop but are not used or returned. This makes them redundant.
// padStr is Never Modified

// The padStr variable is initialized but never updated, so it always returns an empty string.
// Logic for Padding is Misaligned

// If the goal is to add padding alternately to the start and end of str, the logic for appending * to str is missing.
// Potential Scope Issue

// The variables padStart and padEnd are defined without let or const, which could lead to unintended side effects due to their global scope.


function padIt(str,n){
  2 parameters: str= string, to be padded with * alternating-> left, right 
  n= how many times to pad the string
  
  loops n times
  each loop add * to the str
  first loop *a
  second loop *a*
  third loop **a*
  forth loop **a**
  fifth loop ***a**
  return padded str
}
