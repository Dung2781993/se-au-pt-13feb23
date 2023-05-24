const Calculator = require("../models/Calculator");
const calculator = new Calculator(); 

exports.addNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let sum = calculator.add(number1, number2);
  console.log(sum);
  res.status(200);
  res.json({ result: sum });
};

exports.substractNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let sum = calculator.sub(number1, number2);
  res.status(200);
  res.json({ result: sum });
};
