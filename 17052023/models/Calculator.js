class Calculator {
  constructor() {
    this.id = Date.now();
  }
  #log = () => {
    console.log(`Helloworld`);
  };
  add(num1, num2) {
    const value = num1 + num2;
    return value;
  }
  sub(num1, num2) {
    const value = num1 - num2;
    return value;
  }
}

module.exports = Calculator;
