// Adauga o proprietate booleana numita isTrunkOpen
// si asigneaza-i valoarea false.
// Adauga metode numite openTrunk() si closeTrunk()
// care sa seteze proprietatea isTrunkOpen pe true, respectiv false.
// Adauga o proprietate booleana numita
// areLightsOn si asigneaza-i valoarea false.
// Adauga metode numite turnLightsOn() si turnLightsOff()
// care sa manipuleze valoarea.
// Adauga o metoda numita flashLights()
// care sa apeleze cele doua metode in succesiune, folosind metoda window.setTimeout().

const car = {
  make: 'Audi',
  color: 'black',
  wheels: 4,
  speed: 50,
  isTrunkOpen: false,
  areLightsOn: false,
  topSpeed: 160,
  topReverseSpeed: -50,

  stop() {
    this.speed = 0;
  },
  accelerate: function () {
    this.speed++;
  },
  decelerate: function () {
    this.speed--;
  },

  openTrunk: function () {
    this.isTrunkOpen = true;
  },
  closeTrunk: function () {
    this.isTrunkOpen = false;
  },

  turnLightsOn: function () {
    this.areLightsOn = true;
  },
  turnLightsOff: function () {
    this.areLightsOn = false;
  },

  flashLights: function () {
    // pastrarea keywordului this
    // metoda 1 pre -2016
    const self = this;
    self.turnLightsOn();

    window.setTimeout(function () {
      self.turnLightsOff();
    }, 1000 * 2);
  },
  setSpeed: function (fixSpeed) {
    if (fixSpeed >= this.topReverseSpeed && fixSpeed <= this.topSpeed) {
      this.speed = fixSpeed;
    } else if (fixSpeed > this.topSpeed) {
      this.speed = this.topSpeed;
    } else {
      this.speed = this.topReverseSpeed;
    }
    console.log(this.speed);
  },
};
