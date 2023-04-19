const exampleJSON = '{"firstName" : "Teddy"}';

const getName = () => {
  try {
    const user = JSON.parse(exampleJSON);


    if (!user.name) {
      //Checking name property exists
      throw new SyntaxError("Name property doesn't exist");
    }
    const userName = user?.name;
    console.log(user?.name);
  } catch (error) {
    console.error(`JSON error - getName function error: ${error.message}`);
  }
};

const setTimeoutTryCatch = () => {
  try {
    setTimeout(() => {
      console.log(test); //Test is not defined => throw exception
    }, 1000)
  } catch (err) {
    console.error(`setTimeoutTryCatch excpetion: ${err.message}`);
  }
}


async function covidJSONData() {
  try {
    const response = await fetch("https://api.covid19api.com/summary"); //Endpoint PUT/GET/POST/DELETE
    console.log(response);
    
  } catch (err) {
    console.error(`covidJSONData excpetion: ${err.message}`);
  }
}
covidJSONData();

let a = 1;
let b = 2;
let result = a +b;
console.log(result);