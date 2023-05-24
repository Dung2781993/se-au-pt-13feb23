//Borrowing a method

function hash1() {
  console.log([].join.call(arguments));
}

//hash1(1,2)

//Functional binding => this

const user = {
  firstName : "Teddy",
  hello() {
    console.log(this);
    console.log(`Hello, ${this.firstName}`);
  },
}
//First solution
// setTimeout(function() {
//   user.hello()
// }, 1000);

//Second solution
const hello = user.hello.bind(user);
//setTimeout(hello, 1000);


//Partial functions
function mul(a,b) {
  console.log(a);
  console.log(b);
  return a * b;
}

const triple = mul.bind(null, 3, 5);


//Partial functions without context
function partial(func, ...argsBound) {
  return function(...args) {
    console.log(this);
    console.log(...argsBound);
    console.log(...args);
    console.log('Testing Partial function');
    return func.call(this, ...argsBound, ...args);
  }
}

const user2 = {
  firstName : "Teddy",
  hello(time, pharse) {
    console.log(`${time} ${this.firstName}: ${pharse}`);
  } 
}

// user2.hello = partial(user2.hello, new Date());
// user2.hello('Hello');

//Public access, private access, protected access

//Using get and set 
const person1 = {
  firstName: 'Test',
  lastName: 'Teddy',
  city: 'Sydney',
  tel: 00000,

  get city() {
    return this.city || 'Address undefined'
  },

  get Name() {
    return this.firstName.toUpperCase();
  },
  
  set Name(value) {
    //Not allow to have number
    this.firstName = value.toLocaleLowerCase();
  },

  get CityDetails() {
    return 'Sydney';
  },
}

console.log(person1.CityDetails);
person1.Name = 'Alberto';
console.log(person1.Name);


