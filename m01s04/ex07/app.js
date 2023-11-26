var friends = [
  {
    name: 'Cornelia',
    surname: 'Jude',
    friends: {},
  },

  {
    name: 'Larry',
    surname: 'Larryson',
    friends: {},
  },

  {
    name: 'Steven',
    surname: 'Stevenson',
    friends: {},
  },

  {
    name: 'Carol',
    surname: 'Carolson',
    friends: {},
  },

  {
    name: 'Andra',
    surname: 'Andrason',
    friends: {},
  },
];

for (var i = 0; i < friends.length; i++) {
  console.log(friends[i].surname);
}

for (var i = 0; i < friends.length; i++) {
  var friend = friends[i];
  var fullReverseName = friend.surname + ' ' + friend.name;
  if (friend.name === 'Steven' && friend.surname === 'Stevenson') {
    console.log('M-am oprit la ' + fullReverseName + '.');
    break;
  }
  console.log(fullReverseName);
}

var maxChar = 13;
for (var i = 0; i < friends.length; i++) {
  var friend = friends[i];
  var totalCharacters = (friend.surname + friend.name).length;

  if (totalCharacters <= 13) {
    continue;
  }

  console.log(
    friend.surname + ' ' + friend.name + ' are mai mult de 13 caractere.',
  );
}

for (var i = 0; i < friends.length; i++) {
  console.log(friends[i].name);
}

for (var i = 0; i < friends.length; i++) {
  var completeName = friends[i].name + ' ' + friends[i].surname;
  console.log(completeName);
}

maxChar = 9;
for (var i = 0; i < friends.length; i++) {
  var completeName = friends[i].surname + ' ' + friends[i].name;
  var surnameLength = friends[i].surname.length;
  if (surnameLength !== maxChar) {
    console.log(completeName);
  } else {
    console.log('M-am oprit la ' + completeName);
    break;
  }
}
