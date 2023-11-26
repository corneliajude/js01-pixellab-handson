var person = {
  firstName: 'Cornelia',
  lastName: 'Jude',
  email: '@yahoo.com',
  birthYear: 1997,
  pets: [
    {
      name: 'Puff',
      species: 'Amur Leopard',
      age: '4'
    },
    {
      name: 'Pow',
      species: 'Black Rhino',
      age: '8'
      },
    { name: 'Pam',
    species: 'Cross River Gorilla',
    age: '5'
  },
  ],
  zipCode: '876435',
};

console.log(
  'Numele meu este: ' +
    person.firstName +
    ' ' +
    person.lastName +
    ' si am ' +
    person.pets.length +
    ' animale.',
);

console.log('Am acelasi email din copilarie: ' + person.email + '.');

console.log(
  'Unul din cele ' +
    person.pets.length +
    ' animale ale mele este ' +
    person.pets[1].species +
    ' si are ' +
    person.pets[1].age +
    ' ani.',
);

console.log((2023 - person.pets[2].age).toString());

var yearDifference = 2023 - person.birthYear - person.pets[0].age;

console.log(yearDifference.toString());

var petName = person.pets[0].name;

console.log(
  'Intre ' +
    person.firstName +
    ' si ' +
    petName +
    ' este o diferenta de ' +
    yearDifference +
    ' ani.',
);

var sentence01Element = document.getElementById('sentence01');
sentence01Element.innerText =
  person.firstName +
  ', ' +
  person.pets[0].name +
  ', ' +
  person.pets[1].name +
  ', ' +
  person.pets[2].name +
  ' locuiesc toti in aceeasi casa';

var sentence02Element = document.getElementById('sentence02');
sentence02Element.innerText = person.pets[0].age - person.pets[2].age;

var sentence03Element = document.getElementById('sentence03');
sentence03Element.innerText =
  'Ma numesc ' +
  person.firstName +
  ' ' +
  person.lastName +
  ', m-am nascut in ' +
  person.birthYear +
  ' si codul meu postal este: ' +
  person.zipCode;

var sentence04Element = document.getElementById('sentence04');
sentence04Element.innerText =
  'Animalele mele s-au nascut in ' +
  (2023 - person.pets[0].age) +
  ', ' +
  (2023 - person.pets[1].age) +
  ', ' +
  (2023 - person.pets[2].age) +
  '.';
