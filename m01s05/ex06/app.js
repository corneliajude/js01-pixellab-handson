const person = {
  getName: function () {
    return 'Cornelia Jude';
  },
  getAge: function () {
    return 26;
  },
};

// forced example
function accessor(methodSuffix) {
  const methodName = `get${methodSuffix}`;

  return person[methodName]();
}

console.log(accessor('Name'));

console.warn(
  `
    Folosind accesorul salveaza numele mic al
    persoanei intr-o variabila si foloseste-l
    in propozitia: “Eu sunt xxx.”
  `,
);
const firstName = accessor('Name');
console.log(`Eu sunt ${firstName}.`);

console.warn(
  `
    Afiseaza anul de nastere al persoanei
    folosind anul curent.
  `,
);
const currentYear = new Date().getFullYear();
const birthYear = currentYear - accessor('Age');
console.log(birthYear.toString());
console.log(
  `M-am nascut in ${birthYear}.`
);
console.log(
  `Ma numesc ${accessor('Name')} si am ${accessor(
    'Age')} ani!`,
);

console.warn(
  `
    Afiseaza propozitia
    “Ma numesc xxx yyy, am aa ani si m-am nascut in anul aaaa.”
  `,
);
console.log(
  `Ma numesc ${accessor('Name')}, am ${accessor(
    'Age',
  )} ani si m-am nascut in anul ${birthYear}.`,
);
