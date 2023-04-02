//ternary operator

const numArrTS = [1,2,3,4,5,100,200];

const checkTotalSumLessThanValueTS = (arrayNumber: number[], value: number) => {
  const sum = arrayNumber.reduce((sum:number, current:number) => sum + current, 0);
  return (sum < value) ? `less than ${value}` : `greater than ${value}`;
};


interface StudentTS {
  name: string
  age: number
  score: number;
  school: string;
}

class StudentClassTS {
  name: string;
  age: number;
  score: number;
  school: string;
  constructor(name: string, age: number, score: number, school: string) {
    this.name = name;
    this.age = age;
    this.score = score;
    this.school = school;
  }
}

const studentArrTS = [
  new StudentClassTS('Teddy', 20, 90, 'Sydney High school'),
  new StudentClassTS('Luke', 23, 88, 'Sydney High school'),
  new StudentClassTS('Rachel', 23, 95, 'Sydney High school'),
  new StudentClassTS('Liz', 20, 92, 'Sydney High school'),
  new StudentClassTS('Alberto', 24, 85, 'Sydney High school'),
]

const checkTotalSumScoreOfListStudentGradeLessThanValueTS = (studentArrTS: StudentTS[], value: number) : string => {
  //Checking total score of the array is greater than value or not => use reduce function to get the sum of the array (Slide 41)
  const totalScore = studentArrTS.reduce((sum:number, student:StudentTS) => sum + student.score, 0);
  return (totalScore < value) ? `less than ${value}` : `greater than ${value}`;
};

console.log(checkTotalSumScoreOfListStudentGradeLessThanValueTS(studentArrTS, 500));