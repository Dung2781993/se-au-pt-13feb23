"use strict";

module.exports = (app) => {
  //Controller Register
  const operationController = require('../Controllers/OperationController');


  //Root operation
  app.get("/", (req, res) => {
    res.send('Module 5 exerices');
  })

  //Operation

  //Addition endpoint - Get request
  app.get("/operation/addition", (req, res) => { //Taking 2 arguments request and response
    operationController.addition(req, res);
  });

  //Subtraction endpoint - Get request
  app.get("/operation/subtraction", (req, res) => {
    operationController.subtraction(req, res);
  });

  //Multiplicity endpoint - Get request
  app.get("/operation/multiplicity", (req, res) => {
    operationController.multiplicity(req, res);
  });

  //Division endpoint - Get request
  app.get("/operation/division", (req, res) => {
    operationController.division(req, res);
  });
};