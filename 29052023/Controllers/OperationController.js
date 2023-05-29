
const Operation = require("../Models/Operation");
const operation = new Operation(); 

exports.addition = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let sum = operation.addition(number1, number2);
  res.status(200);
  res.json({ result: sum });
};

exports.subtraction = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let sum = operation.subtraction(number1, number2);
  res.status(200);
  res.json({ result: sum });
};

exports.multiplicity = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let sum = operation.multiplicity(number1, number2);
  res.status(200);
  res.json({ result: sum });
};

exports.division = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let sum = operation.division(number1, number2);
  res.status(200);
  res.json({ result: sum });
};
