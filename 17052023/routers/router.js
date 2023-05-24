"use strict";

module.exports = (app) => {
  const calculatorController = require('../controllers/calculatorController');
  const teamController = require('../controllers/teamController');
  const countryController =  require('../controllers/countryController');

  //Root router
  app.get("/", (req, res) => {
    res.send('MVC Structure');
  })

  //Calculator Operation
  app.get('/operation/add', (req, res) => {
    calculatorController.addNumbers(req, res);
  })

  //Calculator Operation
  app.get('/operation/subtract', (req, res) => {
    calculatorController.substractNumbers(req, res);
  })

  //Team Operation
  app.get('/team/fetchTeamDetails', (req, res) => {
    teamController.fetchTeamDetails(req, res);
  })

  //Country
  app.get('/country/hasHugePopulation', (req, res) => {
    countryController.hasHugePopulation(req, res);
  })
}