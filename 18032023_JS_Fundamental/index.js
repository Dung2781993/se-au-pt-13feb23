function printName(name) {
  return `Hello ${name}`;
}

function makeFirstCharacterUpperCase(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

const API_CONNECTION = "https://pokenmon.com";
const STUDENT_NAME_1 = "Teddy";

let convertFirstUpperCharacter = makeFirstCharacterUpperCase("teddy");
let result = printName(convertFirstUpperCharacter);

console.log("1" == 1); //True or false
console.log(1 == true);
