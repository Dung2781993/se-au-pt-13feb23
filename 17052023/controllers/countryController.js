const Country = require("../models/Country");

exports.hasHugePopulation = (req, res) => {
  const country = new Country(req.query.country, req.query.population);
  res.status(200);
  res.json({ result: `Does ${req.query.country} has huge population: ${country.hasHugePopulation()}`});
};