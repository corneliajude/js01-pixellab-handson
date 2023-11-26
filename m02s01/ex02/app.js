class Vehicle {
  constructor(
    make,
    color,
    wheels,
    speed,
    topSpeed = 160,
    topReverseSpeed = -50,
  ) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;
    this.topSpeed = topSpeed;
    this.topReverseSpeed = topReverseSpeed;
  }

  displaySpeed() {
    console.log(`Viteza curenta este: ${this.speed}.`);
  }

  accelerate() {
    this.setSpeed(this.speed + 1);
  }

  decelerate() {
    this.setSpeed(this.speed - 1);
  }

  setSpeed(speed) {
    if (speed > this.topSpeed) {
      this.speed = this.topSpeed;
      this.displaySpeed();

      return;
    }

    if (speed < this.topReverseSpeed) {
      this.speed = this.topReverseSpeed;
      this.displaySpeed();

      return;
    }

    this.speed = speed;
    this.displaySpeed();
  }
}

// Vehicle -- superclasa
class Car extends Vehicle {
  constructor(make, color, speed, topSpeed, topReverseSpeed) {
    super(make, color, 4, speed, topSpeed, topReverseSpeed);
    // masina are 4 roti
  }
}

class Bicycle extends Vehicle {
  constructor(make, color, speed, topSpeed, topReverseSpeed) {
    super(make, color, 2, speed, topSpeed, 0);
    // bicicleta are 2 roti
  }

  displaySpeed() {
    console.log(`Aceasta bicicleta are: ${this.speed}.`);
  }

  toString() {
    return `${this.make}, ${this.color}`;
  }
}

class Tricycle extends Vehicle {
  constructor(make, color, speed, topSpeed, topReverseSpeed) {
    super(make, color, 3, speed, topSpeed, 0);
    // tricicleta are 3 roti
  }

  displaySpeed() {
    console.log(`Aceasta bicicleta are: ${this.speed}.`);
  }

  toString() {
    return `${this.make}, ${this.color}`;
  }
}
