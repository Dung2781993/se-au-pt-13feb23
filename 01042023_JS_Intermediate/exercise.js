

//Sum of the array
const numArr = [1,2,3,4,5,100,200]
const checkTotalSumArrayLessThanValue = (arrayNumber, value) => {
  //Checking sum of the array is greater than value or not => use reduce function to get the sum of the array (Slide 41, Intermediate)
  //Get the sum of the array and compare the sum with the provide value
  //First Option : Using foreach
  //Second Option: Using reduce
  let sumOption1 = [];



  return (result < value) ? `less than ${value}` : `greater than ${value}`;
};

//Sum of the array object

class Student {
  constructor(name, age, score, school) {
    this.name = name;
    this.age = age;
    this.score = score;
    this.school = school;
  }
}

const studentArr = [
  new Student('Teddy', 20, 90, 'Sydney High school'),
  new Student('Luke', 23, 88, 'Sydney High school'),
  new Student('Rachel', 23, 95, 'Sydney High school'),
  new Student('Liz', 20, 92, 'Sydney High school'),
  new Student('Alberto', 24, 85, 'Sydney High school'),
]
const checkTotalSumScoreOfListStudentGradeLessThanValue = (studentArr, value) => {
  //Checking sum of the array is greater than value or not => use reduce function to get the sum of the array (Slide 41)

  return (result < value) ? `less than ${value}` : `greater than ${value}`;
};


const students = [
  { name: "Teddy", scores: [90, 85, 92] },
  { name: "Alberto", scores: [75, 80, 85] },
  { name: "Adam", scores: [90, 95, 85] },
  { name: "David", scores: [80, 100, 86] },
  { name: "Jessy", scores: [100, 96, 98] },
  { name: "Linda", scores: [87, 100, 98] },
];

// Use map to calculate the average test score for each student

//Formula:  avarage = total_score/student.scores.length

// Use filter to only select students with an average above 90

let copyStudents = [ ...students ];
copyStudents.forEach(student => {
  let totalSum = 0;
  const scores = student.scores;
  scores.forEach(score => {
    totalSum += score;
  })
  const avarage = totalSum / scores.length;
  student.average = avarage;
})

let listStudentsAbove90 = [];

copyStudents.forEach(student => {
  if (student.average > 90 ) {
    listStudentsAbove90.push(student);
  }
})
console.log(listStudentsAbove90);


const studentAverages = students.map(student => {
  const totalSum = student.scores.reduce((sum, score) => sum + score);
  return { name: student.name, average: totalSum / student.scores.length };
});


//console.log(studentAverages);

// Use filter to only select students with an average above 90
const highPerformers = studentAverages.filter(student => student.average > 90);

//console.log(highPerformers);