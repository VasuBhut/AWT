class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  displayDetails() {
    console.log(`Vehicle: ${this.year} ${this.make} ${this.model}`);
  }

  calculateMileage(distance, fuel) {
    const mileage = distance / fuel;
    console.log(`Mileage: ${mileage} miles per liter`);
  }
}

class Car extends Vehicle {
  constructor(make, model, year, doors) {
    super(make, model, year);
    this.doors = doors;
  }

  displayDetails() {
    super.displayDetails();
    console.log(`Doors: ${this.doors}`);
  }
}

class Motorcycle extends Vehicle {
  constructor(make, model, year, engineDisplacement) {
    super(make, model, year);
    this.engineDisplacement = engineDisplacement;
  }

  displayDetails() {
    super.displayDetails();
    console.log(`Engine Displacement: ${this.engineDisplacement} cc`);
  }
}

const car = new Car("Supra", 2022, 2, 2);
car.displayDetails();
car.calculateMileage(300, 15);

const motorcycle = new Motorcycle("Ninja", 2021, 500);
motorcycle.displayDetails();
motorcycle.calculateMileage(200, 10);
