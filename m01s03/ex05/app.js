var person = {
  name: 'Cornelia',
  surname: 'Jude',
  age: 26,
  petOwner: true,
  skills: ['html', 'javascript', 'css'],
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 28,
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 34,
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 25,
    },
  ],
};

console.log(
  'Ma numesc ' +
    person.name +
    ' ' +
    person.surname +
    ' si stiu ' +
    person.skills[0] +
    ' si ' +
    person.skills[2] +
    '.',
);

console.log('Sunt ' + person.name + ' si acum invat JavaScript.');

console.log(
  'Am ' +
    person.friends.length.toString() +
    ' prieteni: ' +
    person.friends[0].name +
    ', ' +
    person.friends[1].name +
    ' si ' +
    person.friends[2].name +
    '.',
);

console.log(
  'Ma numesc ' +
    person.name +
    ' ' +
    person.surname +
    ' si vreau sa invat ' +
    person.skills[1] +
    '.',
);

console.log('Sunt ' + person.name + ' si stiu HTML si CSS.');

console.log(
  'Am ' +
    person.friends.length.toString() +
    ' prieteni: ' +
    person.friends[0].surname +
    ', ' +
    person.friends[1].surname +
    ' si ' +
    person.friends[2].surname +
    '.',
);

console.log(
  'Numele meu este ' +
    person.name +
    ' ' +
    person.surname +
    ', am ' +
    person.age +
    ' ani si ' +
    person.friends.length.toString() +
    ' prieteni.',
);
