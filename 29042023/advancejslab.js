/**
 * 4. The Fibonacci sequence of numbers is a famous pattern where the next number in the 
sequence is the sum of the previous 2.
e.g. 1, 1, 2, 3, 5, 8, 13, 21, 34, etc.
a) Write a function printFibonacci() using setInterval that outputs a number in 
the Fibonacci sequence every second.
b) Write a new version printFibonacciTimeouts() that uses nested setTimeout
calls to do the same thing
c) Extend one of the above functions to accept a limit argument, which tells it how many 
numbers to print before stopping.
 */

// 0,1,1,2,3,5,8,13,21,34,55, ....
//   1 2 3
//     1 2 3
//       1 2 3
//         1 2 3

/**
 * a) Write a function printFibonacci() using setInterval that outputs a number in 
the Fibonacci sequence every second.
 */

//0,1,1,2,3,5,8,13 and so on

const printFibonacci = () => {
  let first = 0;
  let second = 1;

  console.log(first);
  console.log(second);

  setInterval(function printNextFibonacciNumber() {
    let next = first + second;
    console.log(next);

    first = second;
    second = next;
  }, 2000);
};

//printFibonacci();

/** 
 * b) Write a new version printFibonacciTimeouts() that uses nested setTimeout
calls to do the same thing
*/

const printFibonacciTimeouts = () => {
  let first = 0;
  let second = 1;

  console.log(first);
  console.log(second);
  setTimeout(
    function printNextFibonacciNumber(first, second) {
      let next = first + second;
      console.log(next);

      first = second;
      second = next;
      setTimeout(printNextFibonacciNumber, 1000, first, second);
    },
    1000,
    first,
    second
  );
};

//printFibonacciTimeouts();

/** 
 * c) Extend one of the above functions to accept a limit argument, which tells it how many 
numbers to print before stopping.
*/

const printFibonacciWithLimitedNumber = (limit) => {
  let first = 0;
  let second = 1;

  console.log(first);
  console.log(second);

  let counter = 2;
  console.log(`Counter value: ${counter}`);

  let printFibonaciInterval = setInterval(function printNextFibonacciNumber() {
    let next = first + second;
    console.log(next);

    first = second;
    second = next;

    counter = counter + 1;

    if (counter === limit) clearInterval(printFibonaciInterval); //Stop the process if the counter equals the limit
  }, 2000);
};

//printFibonacciWithLimitedNumber(8);

/**
 * 5. The following car object has several properties and a method which uses them to print a 
description. When calling the function normally this works as expected, but using it from 
within setTimeout fails. Why?


 */

let car = {
  make: "Porsche",
  model: "911",
  year: 1964,
  description() {
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
  },
};
car.description(); //works

//a )Fix the setTimeout call by wrapping the call to car.description() inside a  function
//Change the year for the car by creating a clone of the original and overriding i

car = {...car, year: 2023};


//Does the delayed description() call use the original values or the new values from  b)? Why

//d) Use bind to fix the description method so that it can be called from within  setTimeout without a wrapper function

let describeredCar = car.description.bind(car);
setTimeout(describeredCar, 2000)

//e Change another property of the car by creating a clone and overriding it, and test that  setTimeout still uses the bound value from d
car = {...car, make: 'BMW'};
setTimeout(function() {
  car.description()
}, 2000);
