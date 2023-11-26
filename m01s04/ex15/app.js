var person = {
  name: 'Cornelia',
  surname: 'Jude',
  age: 30,
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
      age: 25,
    },

    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 33,
    },

    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  ],
};

var friends = person.friends;

for (var i = 0; i < friends.length; i++) {
  var firstFriend = friends[i];

  for (var j = 0; j < friends.length; j++) {
    if (i !== j) {
      var secondFriend = friends[j];

      var ageDiff = Math.abs(firstFriend.age - secondFriend.age);

      console.log(
        `Intre ${firstFriend.name} si ${secondFriend.name} este o diferenta de ${ageDiff} ani.`,
      );
    }
  }
}
