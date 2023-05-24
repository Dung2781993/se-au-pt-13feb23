class Country {
  constructor(name, population) {
    this.name = name;
    this.population = population;
  }
  hasHugePopulation() {
    return this.population > 1000000;
  }
}

module.exports = Country;
