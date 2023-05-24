
const employee2 = {
  name: "Alberto",
  country: "US",
  occupation: "Data scientist",
  age: 31,
};

const employee1 = {
  name: "Teddy",
  country: "England",
  occupation: "Software Engineer",
  age: 30,
};

const engineer = {
  name: "Rachel",
  country: "Japan",
  occupation: "DevOps Engineer",
  age: 32,
};

const student = {
  firstName: 'Joe',
  lastName: 'Doe',
  age: 19,
  address: '221b Baker Street',
  city: 'London',
  country: 'England',
  showDetails() {
    return `${this.firstName} ${this.lastName} - ${this.address}, ${this.city}, ${this.country}`
  },
  drivingEligible() {
    return this.age >= 18; //True or false
  }
};

class Student  {
  constructor(name, address, age, occupation, country, isMarriage) {
    this.name = name;
    this.address = address;
    this.age = age;
    this.occupation = occupation;
    this.country = country;
    this.isMarriage = isMarriage ?? false;
  }
  grade = 0
  hobby = null
}
//TypeScript
const student1 = new Student("Abert", "221b Bake Street", 21, 'Civil Engineer', 'England', true);
const student2 = new Student("James", "22 Newyork Street", 20, 'Computer Scientist', 'England');
const student3 = new Student("David", "22 Washington DC", 22, 'Game Developer', 'England');

const student4 = new Student("Rachel", "22 Sydney Street", 22, 'Game Developer', 'Australia');
const student5 = new Student("Jessica", "22 Sydney Street", 22, 'Data Scientist', 'Australia');

student1.grade = 90;
student1.hobby = 'Playing sport';


const apple = {
  price: 100,
  type: 'Royal gala',
  valueOf() {
    return this.price;
  },
  toString() {
    return 'JS';
  }
}

const employee = {
  name: 'Albert',
  salary: 200000,
  [Symbol.toPrimitive]( hint ) {
    console.log(hint)
    if (hint === 'string') {
      return 'It is string'
    }
    return this.salary;
  }
};

console.log(typeof `${employee}`);
console.log(`${employee}`);