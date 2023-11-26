var person = {
  name: 'Cornelia',
  surname: 'Jude',
  age: 50,
  petOwner: true,
  skills: [
    'html',
    'javascript',
    'css',
    'java',
    'c++',
    'node',
    'jquery',
    'node.js',
  ],

  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },

    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },

    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  ],
};

console.warn(
  `
    Folosind obiectul person si forEach,
    afiseaza skillurile din pozitiile impare ale arrayului.
  `,
);
person.skills.forEach(function (skill, index) {
  if (index % 2 !== 0) {
    console.log(skill);
  }
});

console.warn(
  `
    In mod similar, afiseaza skillurile care contin litera a.
  `,
);
person.skills.forEach(function (skill) {
  if (skill.toLowerCase().includes('a')) {
    console.log(skill);
  }
});

person.friends.forEach(function (friend, index){
  message = friend.name + ' ' + friend.surname;
  console.log(message);
})

person.skills.forEach(function (skill, index){
  console.log(skill);
})

//  Ex01

person.skills.forEach(function (skill, index) {
  if (index % 2 !== 0) {
    console.log(
      'Tehnologia ' +
        skill +
        ' se afla pe pozitia ' +
        index +
        ', impara, a arrayului.',
    );
  }
});

//  Ex02

person.skills.forEach(function (skill) {
  if (skill.includes('a')) {
    console.log('Tehnologia ' + skill + ' contine litera "a".');
  }
});

//  Ex03
var message = 'Prietenii mei se numesc ';

person.friends.forEach(function (friend, index, friends) {
  var punctuation = ', ';

  if (friends.length - 1 === index) {
    punctuation = '.';
  }
  message += friend.name + ' ' + friend.surname + punctuation;
});

console.log(message);

// Ex04

var sum = 0;
var message1 = 'Varstele insumate sunt: ';
person.friends.forEach(function (friend) {
  if (friend.age >= 30) {
    sum += friend.age;
  }
});
console.log(message1 + sum + '.');

// Ex05

var birthSum = 0;
var birthYear = 0;
person.friends.forEach(function (friend) {
  birthYear = new Date().getFullYear() - friend.age;
  if (friend.age % 2 !== 0) {
    birthSum += birthYear;
  }
});
console.log(birthSum.toString());

// Ex06
person.friends.forEach(function (friend) {
  var ageDiff = Math.abs(person.age - friend.age);
  var name = friend.name;

  if (ageDiff >= 2) {
    console.log(`Diferenta pentru ${name}: ${ageDiff} ani.`);
  }
});

// Ex07
var message = '';

person.friends.forEach(function (friend, index, friends) {
  var ageDiff = person.age - friend.age;
  var punctuation = '. ';

  if (friends.length - 1 === index) {
    punctuation = '.';
  }
  message += `Intre ${person.name} si ${friend.name} este o diferenta de ${ageDiff} ani${punctuation}`;
});

console.log(message);

person.skills.forEach(function (skill) {
  console.log(`${person.name} cunoaste ${skill}!`);
});

person.skills.forEach(function (skill) {
  var letter = 'j';
  if (!skill.toLowerCase().startsWith(letter))
    console.log(`Numele tehnologiei ${skill} nu incepe cu litera ${letter}.`);
});

var message = 'Numele mari ale prietenilor mei sunt ';

person.friends.forEach(function (friend, index, friends) {
  var surname = friend.surname;
  var punctuation = ', ';

  if (index === friends.length - 1) {
    punctuation = '.';
  }
  message += surname + punctuation;
});

console.log(message);

var ageSum = 0;

person.friends.forEach(function (friend) {
  ageSum += friend.age;
});
console.log(ageSum.toString());

var birthYearSum = 0;
var currentDate = new Date().getFullYear();

person.friends.forEach(function (friend) {
  birthYearSum += currentDate - friend.age;
});

console.log(birthYearSum.toString());

person.friends.forEach(function (friend) {
  console.log(person.age - friend.age);
});
