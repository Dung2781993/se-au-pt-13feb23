const mapStudents = new Map();


mapStudents.set("Teddy", {
  age: 25,
  occupation: "Software enigneer",
  company: "Test1",
});

mapStudents.set("Alberto", {
  age: 25,
  occupation: "Full Stack enigneer",
  company: "Test2",
});

mapStudents.set("Rachel", [25, "Data Scientist", "Test3"]); //Time complexity O(1)


const studentArr = [
  {
    name: "Teddy",
    age: 25,
  },
  {
    name: "Aberto",
    age: 25,
  },
  {
    name: "Rachel",
    age: 25,
  },
];
//Time complexity O(N) =>  O(3)


const students = [
  {
    name: "Rachel",
    age: 25,
    city: "Sydney"
  },
  {
    name: "Jessical",
    age: 25,
    city: "Brisbane"
  },
  {
    name: "Alberto",
    age: 25,
    city: "Melbourne"
  },
  {
    name: "Teddy",
    age: 25,
    city: "Tasmania"
  },
  {
    name: "David",
    age: 25,
    city: "Perth"
  },
  {
    name: "Jason",
    age: 25,
    city: "NT"
  },
  {
    name: "Liz",
    age: 25,
    city: "Melbourne"
  },
  {
    name: "Taylor",
    age: 25,
    city: "Melbourne"
  },
  {
    name: "Jason1",
    age: 25,
    city: "NT"
  },
  {
    name: "Jason2",
    age: 25,
    city: "NT"
  },
];


/** 
 * Expected output 
 * Sydney: 5,
 * Melbourne: 4,
 * Perth: 3,
 * Brisban: 2,
 * Tasmania: 1
 * 
 * Map(city, numberOfStudents)
*/

let studentMapByCity = new Map();

students.forEach((student, index) => {
  //Adding key and value to map
  
  //Checking if the map alreay has the city. If it has the city => increase the count, otherwise we add new key city and count to the map
  if(studentMapByCity.has(student.city)) {
    let count = studentMapByCity.get(student.city); //Get the current count based on city
    count++; //Increase the count by 1
    studentMapByCity.set(student.city, count); //Assign the new count back to the map based on city key value
  } else {
    studentMapByCity.set(student.city, 1);
  }
})

//Sorting the city and get the highest student by city
let highesStudent = 0;
let listCity = [];
studentMapByCity.forEach((value, city) => {
  if (value > highesStudent) {
    highesStudent = value;
  }
  listCity.push({
    city: city,
    numberOfStudents: value
  });
});
const highestCity = listCity.filter(item => {return item.numberOfStudents === highesStudent});