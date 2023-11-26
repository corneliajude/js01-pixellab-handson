class Car {
  // Varianta 1 ptr definirea proprietatii
  topSpeed = 160;
  isTrunkOpen = false;
  areLightsOn = false;

  constructor(make, color, wheels, speed) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;

    // Varianta 2 ptr definirea proprietatii
    this.topReverseSpeed = -50;
  }

  accelerate() {
    this.speed++;
  }

  decelerate() {
    this.speed--;
  }

  stop() {
    this.speed = 0;
  }

  setSpeed(speed) {
    if (speed > this.topSpeed) {
      this.speed = this.topSpeed;

      return;
    }

    if (speed < this.topReverseSpeed) {
      this.speed = this.topReverseSpeed;

      return;
    }

    this.speed = speed;
  }

  openTrunk() {
    this.isTrunkOpen = true;
  }

  closeTrunk() {
    this.isTrunkOpen = false;
  }

  turnLightsOn() {
    this.areLightsOn = true;
  }

  turnLightsOff() {
    this.areLightsOn = false;
  }

  flashLights() {
    this.turnLightsOn();
    setTimeout(function () {
      self.turnLightsOff();
    }, 2500);
  }
}

const audi = new Car('Audi', 'black', 4, 50);

console.warn(`Instantiaza o alta masina (Opel, red, cu 4 roti si viteza 3).
O poti salva intr-o variabila numita opel.
`);

const opel = new Car('Opel', 'red', 4, 3);

var cars = [audi, opel];

console.warn(`Ruleaza o bucla prin forEach si afiseaza propozitiile
(pentru fiecare din masini):
“Masina era marca make si se deplasa cu speed km/h.”
In fiecare iteratie, decelereaza masina cu 5 unitati, apoi afiseaza:
“Viteza noua este speed km/h.”
`);

cars.forEach((car) => {
  console.log(
    `Masina era marca ${car.make} si se deplasa cu ${car.speed} km/h.`,
  );

  car.speed = car.speed - 5;
  console.log(`Viteza noua este ${car.speed} km/h.`);
});
