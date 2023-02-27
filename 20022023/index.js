function Substraction(a, b) {
  return a - b;
}


function Addition(a, b) {
  return a + b;
}


function Mutiplication(a, b) {
  return a * b;
}

function Division(a, b) {
  return a % b;
}

/*
2. Make a function to check a number is odd or even number
    if it is even number return 'Even number'
    if it is odd number return 'Odd number'
*/


function CheckNumberVersion1(number) {
  //  check remainder is 0 => it is the even number
  //  check remainder is not 0 => it is the odd number
  if (number === 0) {
    return 'Invalid number';
  }

  if (number % 2 === 0) {    
    return 'Even number';
  }

  if (number % 2 !== 0) {
    return 'Odd number';
  }
}

function CheckNumberVersion2(number) {
  //  check remainder is 0 => it is the even number
  //  check remainder is not 0 => it is the odd number
  if (number === 0) {
    return 'Invalid number';
  }

  if (number % 2 === 0) {
    return 'Even number';
  } else {
    return 'Odd number';
  }
}

// console.log(CheckNumberVersion1(0));
// console.log(CheckNumberVersion2(4));

//Find the total profit on October when we know each day profit
/** 
 *  [10, 20, -10, 0, 20, 50, 60, ...., 100] => Array (list)
 *
*/
// Empty array => element, index and length
var months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'Sep', 'October', 'Nov','Dec'];          


/** 
 * Giving an array with 10 numbers, find the sum of the array
 * 
 * Input: var inputs = [100, 200, -30, -50, 70, 75, 17, 13, 11, 23];
 * 
 * => find the sum of all elements inside this array
 * Hint: Using for loop
*/

var inputs = [100, 200, -30, -50, 70, 75, 17, 13, 11, 23];
var sum = 0;
//Loop inside the array
for(var index = 0; index < inputs.length; index++) {
  console.log(`Index: ${index}`);
  console.log(`Element: ${inputs[index]}`);  

  var element = inputs[index]; //Here is the way to get the element value for example inputs[0] = 100
  sum = sum + element; // sum = 0 + 100 = 100
  console.log(`Sum: ${sum}`);
}
