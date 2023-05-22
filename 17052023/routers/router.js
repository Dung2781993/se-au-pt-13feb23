"use strict";

module.exports = (app) => {
  const calculatorController = require('../controllers/calculatorController');
  const teamController = require('../controllers/teamController');

  //Root router
  app.get("/", (req, res) => {
    res.send('MVC Structure');
  })

  //Calculator Operation
  app.get('/operation/add', (req, res) => {
    calculatorController.addNumbers(req, res);
  })

  //Team Operation
  app.get('/team/fetchTeamDetails', (req, res) => {
    teamController.fetchTeamDetails(req, res);
  })
}