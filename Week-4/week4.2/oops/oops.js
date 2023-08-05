class Vehicle {
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
  }

  drive() {
    console.log(`Driving ${this.make} ${this.model}.`);
  }
}

class Car extends Vehicle {
  constructor(make, model, year, color, numSeats) {
    super(make, model, year, color);

    this.numSeats = numSeats;
  }
}

class RideShareCar extends Car {
  constructor(make, model, year, color, numSeats, isAvailable) {
    super(make, model, year, color, numSeats);
    this.isAvailable = isAvailable;
  }
}

class Shape {
  calculateArea() {}
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    console.log(`Area of Reactangle is ${this.height * this.width}`);
  }
}
class Triangle extends Shape {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }

  calculateArea() {
    let area = (this.base * this.height) / 2;
    console.log(`Area of triangle is ${area}`);
  }
}
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    console.log(
      `Area of Circle is ${Math.PI * this.radius * this.radius}`
    );
  }
}

let reactangle = new Rectangle(10, 23);
let triangle = new Triangle(12, 4);
let circle = new Circle(20);
reactangle.calculateArea();
triangle.calculateArea();
circle.calculateArea();

class BankAccount {
  #accountNumber = 136474782981;
  #balance = 193180939913209;
  #accountHolderName = 'Ninad Kadam';

  get accbalance() {
    return this.#balance;
  }
}

class CheckingAccount extends BankAccount {
  deposit(amount) {
    return this.getbalance() + amount;
  }
  withdraw(amount) {
    if (this.getbalance() - amount < 0) {
      console.log(`Balance is low widrawlw not possible`);
    }

    return this.getbalance() - amount;
  }

  getbalance() {
    return this.accbalance;
  }
}

class SavingsAccount extends BankAccount {
  deposit(amount) {
    return this.getbalance() + amount;
  }
  withdraw(amount) {
    if (this.getbalance() - amount < 0) {
      console.log(`Balance is low widrawlw not possible`);
    }

    return this.getbalance() - amount;
  }

  getbalance() {
    return this.accbalance;
  }
}

let savingsAccount = new SavingsAccount();
let checkingAccount = new CheckingAccount();

console.log(savingsAccount.deposit(1000000));
console.log(savingsAccount.withdraw(12938));
console.log(savingsAccount.getbalance());
