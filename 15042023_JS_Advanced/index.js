let x = 10;

function foo() {
  let y = 20;
}

globalEnvironment = {
  environmentRecord: {
    x: 10,
  },
  outer: null,
};

fooEnvironment = {
  environmentRecord: {
    y: 20,
  },
  outer: globalEnvironment,
};

const sayHi = () => {
  console.log("Hi");
  sayHi.counter++;
};
sayHi.counter = 0;
sayHi.studentName = "Teddy";

function sayHello3(name) {
  console.log(`Hello1 ${name}`);
}

const sayHello = (name) => {
  console.log(`Hello1 ${name}`);
};

const sayHello2 = function func(name) {
  console.log(`Hello2 ${name}`);
};

let hello = (name) => {
  if (name) {
    console.log(`Hello ${name}`);
  } else {
    console.log("Guest");
  }
};

// let welcome1 = hello;
// hello = null;
// welcome1();

let hello2 = function func(name) {
  if (name) {
    console.log(`Hello ${name}`);
  } else {
    console.log("Guest");
  }
};

const sum = new Function("a", "b", "return 0");

function getFunc() {
  const value = "Test";
  const func = new Function(`console.log ${value}`);
  return func;
}

//setTimeout
const welcomeStudent = (name1, name2) => {
  console.log(`Welcome ${name1} and ${name2}`);
};

//let welcomeStudentTimeout = setTimeout(welcomeStudent, 5000, "Rachel", "Liz"); //first argument: function, second argument: number of delayed  miliseconds, the rest arguments: paremeters

async function buyingNathanShoes() {
  const response = await fetch("Nathan/buyshoes"); //POST credit card, size, version, store
  const covidData = await response.json();
  console.log(covidData);

  //Update real time data to UI
}

function slow(x) {
  //It can be query database function
  return x;
}

function cachingDecorator(func) {
  const cache = new Map();
  //Store key is IP
  return function (x) {
    //Check the data will be updated or not
    if (cache.has(x)) {
      return cache.get(x); //Return the content if the content is unchanged
    }
    let result = func.call(this, x);
    cache.set(x, result);
    return result;
  };
}

/*
Q5
The following car object has several properties and a method which uses them to print a 
description. When calling the function normally this works as expected, but using it from 
within setTimeout fails. Why?
let car = {
make: "Porsche",
model: '911',
year: 1964,
description() {
console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
}
};
car.description(); //works
setTimeout(car.description, 200); //fails
a) Fix the setTimeout call by wrapping the call to car.description() inside a 
function
b) Change the year for the car by creating a clone of the original and overriding it
c) Does the delayed description() call use the original values or the new values from 
b)? Why?
d) Use bind to fix the description method so that it can be called from within 
setTimeout without a wrapper function
e) Change another property of the car by creating a clone and overriding it, and test that 
setTimeout still uses the bound value from d)
*/

let car = {
  make: "Porsche",
  model: "911",
  year: 1964,
  description() {
    console.log(this);
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
  },
};
setTimeout(function() {
  car.description()
});

//b
//First solution
let cloneCar = { ...car};
cloneCar.year = 2015;

//Second solution
car = {...car, year: 2015}

//d
let describerCar = car.description.bind(car);
car = {...car, year: 2020};


