console.warn(`1.Creeaza o functie overloaded pentru calcularea suprafetelor numita calculateSurface.
Daca primeste un parametru, sa calculeze suprafata unui patrat. Daca primeste doi, a unui dreptunghi.
Daca primeste trei, sa calculeze suprafata totala a paralelipipedului. Foloseste structura switch.`);
function calculateSurface() {
  switch (arguments.length) {
    case 1:
      let side = arguments[0];
      return side * side;
    case 2:
      var length = arguments[0];
      var width = arguments[1];
      return length * width;
    case 3:
      var length = arguments[0];
      var width = arguments[1];
      var height = arguments[2];
      var upDownSurface = length * width;
      var lateralSurface = height * width;
      var frontalSurface = length * height;
      var totalSurface = 2 * (upDownSurface + lateralSurface + frontalSurface);
      return totalSurface;
    default:
      return 'Număr incorect de argumente';
  }
}

console.log(calculateSurface(2));
console.log(calculateSurface(6, 7));
console.log(
  'Suprafața totală a paralelipipedului:',
  calculateSurface(20, 15, 5),
);

console.warn(
  `2.Creeaza o functie numita calculateCircleArea() si afiseaza suprafata unor cercuri cu raza de 2, 20 si 16.`,
);

function calculateCircleArea(radius) {
  return Math.PI * radius ** 2;
}
console.log(calculateCircleArea(2));
console.log(calculateCircleArea(20));
console.log(calculateCircleArea(16));

console.warn(`3.Creeaza un obiect numit pet cu urmatoarele metode: getName, getSpecies si getAge.
a.Folosind metodele obiectului pet afiseaza propozitia: “nnnn este ssss si are aaaa ani.”
b.Folosind metoda getAge calculeaza si salveaza intr-o variabila numita petAge varsta animalului si afiseaza propozitia: “Animalul meu are petAge ani”
`);
const pet = {
  name: 'Iziz',
  species: 'caniche',
  age: 2,

  getName: function () {
    return this.name;
  },

  getSpecies: function () {
    return this.species;
  },
  getAge: function () {
    return this.age;
  },
};

let petAge = pet.getAge();

console.log(
  `${pet.getName()} este ${pet.getSpecies()} si are ${pet.getAge()} ani.`,
);

console.log(`Animalul meu are ${petAge} ani.`);
