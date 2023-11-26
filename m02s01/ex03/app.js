const Car = {
  make: '',
  color: '',
  wheels: 0,
  speed: 0,
  topSpeed: 140,
  topReverseSpeed: -50,
  areLightsOn: false,
  flashLights() {
    const sparkle = this; // de ce?
    this.turnLightsOn();
    window.setTimeout(function () {
      sparkle.turnLightsOff;
    });
  },
  turnLightsOn() {
    this.areLightsOn = true;
  },
  turnLightsOff() {
    this.areLightsOn = false;
  },

  displaySpeed: function () {
    console.log(`Viteza curenta este: ${this.speed}.`);
  },

  setSpeed(speed = 5) {
    if (speed > this.topSpeed) {
      this.speed = this.topSpeed;
    } else if (speed < this.topReverseSpeed) {
      this.speed = this.topReverseSpeed;
    } else {
      this.speed = speed;
    }
  },

  accelerate: function () {
    this.speed++;

    this.displaySpeed();
  },

  decelerate: function () {
    this.speed--;

    this.displaySpeed();
  },
};

const audi = Object.create(Car);
audi.make = 'Audi';
audi.color = 'black';
audi.wheels = 4;
audi.speed = 0;
audi.topSpeed = 140;
audi.setSpeed(140);
audi.accelerate();
console.log(audi);
