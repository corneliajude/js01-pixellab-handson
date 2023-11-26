var person = {
  name: 'Cornelia',
  surname: 'Jude',
  age: 26,
  petOwner: true,
  skills: {
    html: true,
    css: true,
    javaScript: true,
  },
  friends: {
    larry: {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },

    steven: {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },

    carol: {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  },
};

console.log(Object.keys(person));
console.log(Object.keys(person.skills));

Object.keys(person.skills).forEach(function (skill) {
  if (person.skills[skill] === true) {
    console.log(`${person.name} cunoaste: ${skill}.`);
  }
});

var fullNameReverse = '';

Object.keys(person.friends)
  .slice()
  .reverse()
  .forEach(function (friend) {
    var friendElement = person.friends[friend];

    fullNameReverse = friendElement.surname + ' ' + friendElement.name;

    console.log(fullNameReverse);
  });

var message = 'Prietenii mei sunt ';

Object.keys(person.friends).forEach(function (friend, index, friends) {
  var punctuation = ', ';
  var friendName = person.friends[friend].name;

  if (index === friends.length - 2) {
    punctuation = ' si ';
  }

  if (index === friends.length - 1) {
    punctuation = '.';
  }

  message += friendName + punctuation;
});
console.log(message);

Object.keys(person.friends).forEach(function (friend) {
  var friendElement = person.friends[friend];
  var ageDiff = Math.abs(person.age - friendElement.age);
  console.log(
    `Diferenta de varsta intre ${friendElement.name} si ${person.name} este de ${ageDiff} ani.`,
  );
});

Object.keys(person.skills).forEach(function (skill) {
  console.log(skill);
});

Object.keys(person.friends).forEach(function (friend) {
  console.log(
    person.friends[friend].name + ' ' + person.friends[friend].surname,
  );
});

var message3 = 'Prietenii mei sunt ';
Object.keys(person.friends).forEach(function (friend, index, friends) {
  var punctuation = ', ';
  var friendFullName =
    person.friends[friend].name + ' ' + person.friends[friend].surname;

  if (index === friends.length - 2) {
    punctuation = ' si ';
  }

  if (index === friends.length - 1) {
    punctuation = '.';
  }
  message3 += friendFullName + punctuation;
});
console.log(message3);

Object.keys(person.friends).forEach(function (friend) {
  var friendName = person.friends[friend].name;
  var friendAge = person.friends[friend].age;
  console.log(`${friendName} are ${friendAge} ani.`);
});
