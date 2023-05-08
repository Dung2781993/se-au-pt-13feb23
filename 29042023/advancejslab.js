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

car = { ...car, year: 2023 };

//Does the delayed description() call use the original values or the new values from  b)? Why

//d) Use bind to fix the description method so that it can be called from within  setTimeout without a wrapper function

let describeredCar = car.description.bind(car);
// setTimeout(describeredCar, 2000);

//e Change another property of the car by creating a clone and overriding it, and test that  setTimeout still uses the bound value from d
car = { ...car, make: "BMW" };
// setTimeout(function () {
//   car.description();
// }, 2000);

//7

/** 
 * In JavaScript, the toString method is used to convert an object to a string representation. 
By default, when an object is converted to a String, it returns a string that looks something 
like [object Object]. 
However, we can define our own toString methods for custom objects to provide a more 
meaningful string representation.
a) Define a custom toString method for the Person object that will format and print 
their details
b) Test your method by creating 2 different people using the below constructor function 
and printing them
c) Create a new constructor function Student that uses call to inherit from Person and 
add an extra property cohort
d) Add a custom toString for Student objects that formats and prints their details. Test 
with 2 students
*/

//a) Define a custom toString method for the Person object that will format and print  their details

function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

Person.prototype.toString = function () {
  return `My name is ${this.name}, I am  ${this.age} year old ${this.gender}`;
};

const object1 = new Person("Teddy", 25, "Male");
const object2 = new Person("Rachel", 25, "Female");

/** 
 * b) Test your method by creating 2 different people using the below constructor function 
and printing them
*/

const object3 = new Person("Teddy1", 25, "Male");
const object4 = new Person("Rachel1", 25, "Female");

/** 
 * c) Create a new constructor function Student that uses call to inherit from Person and 
add an extra property cohort
*/

//Releated to Inheritance

function Person(name, age, gender) {
  //Base level constructor
  this.name = name;
  this.age = age;
  this.gender = gender;
}

function Student(name, age, gender, cohort) {
  Person.call(this, name, age, gender);
  this.cohort = cohort;
}
/*
d) Add a custom toString for Student objects that formats and prints their details. Test 
with 2 students
*/
Student.prototype.toString = function () {
  return `My name is ${this.name}, I am  ${this.age} year old ${this.gender}, my cohort is ${this.cohort}`;
};

const student1 = new Student("Liz", 25, "Female", "Software Engineer");

/*
We can delay execution of a function using setTimeout, where we need to provide the 
callback function to be executed after the delay.
a) Create a promise-based alternative randomDelay() that delays execution for a 
random amount of time (between 1 and 20 seconds) and returns a promise we can use 
via .then(), as in the starter code below
b) If the random delay is even, consider this a successful delay and resolve the promise, 
and if the random number is odd, consider this a failure and reject it
c) Update the testing code to catch rejected promises and print a different message
d) Try to update the then and catch messages to include the random delay value
*/


/** 
 * d) Try to update the then and catch messages to include the random delay value
*/

function randomDelayD() {
  //get a random amount of time (between 1 and 20)
  let delay = Math.ceil(Math.random() * 10);
  console.log(`${delay} seconds`);
  return new Promise((resolve, reject) => {
    if (delay % 2 === 0 ){
      resolve(delay);
    } else {
      reject(delay);
    }
  });
}

randomDelayD().then((delay) => console.log(`Sucessfully even delay ${delay} seconds`))
              .catch((delay) => console.log(`Failed odd delay ${delay} seconds`));