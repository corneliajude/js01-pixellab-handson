var cart = {
  name: 'Cornelia',
  surname: 'Jude',
  email: 'email@email',
  products: [
    {
      category: 'PC and Laptop',
      name: 'Wireless Mouse',
      price: 250,
      quantity: 3,
      weight: 200,
    },

    {
      category: 'PC and Laptop',
      name: 'Mechanical Keyboard',
      price: 600,
      quantity: 2,
      weight: 350,
    },

    {
      category: 'Mobile',
      name: 'Portable Charger',
      price: 120,
      quantity: 4,
      weight: 30,
    },

    {
      category: 'PC and Laptop',
      name: 'Gaming Keyboard',
      price: 550,
      quantity: 2,
      weight: 300,
    },

    {
      category: 'Mobile',
      name: 'Phone Stand',
      price: 180,
      quantity: 3,
      weight: 120,
    },

    {
      category: 'Home',
      name: 'Wall Art',
      price: 1200,
      quantity: 2,
      weight: 180,
    },

    {
      category: 'Home',
      name: 'Lamp',
      price: 300,
      quantity: 2,
      weight: 180,
    },
  ],
};

// “name surname are x tipuri de produse in cart.”

cart.products.forEach(function (product) {
  console.log(
    cart.name +
      ' ' +
      cart.surname +
      ' are ' +
      cart.products.length +
      ' tipuri de produse in cart.',
  );
});

console.warn(
  'Afiseaza propozitia: name are urmatoarele produse in cart: a, b, c, d, e si f.',
);

console.warn(
  `Afiseaza in consola propozitia: “name surname are x tipuri de produse in cart."`,
);
cart.products.forEach(function (product) {
  console.log(
    cart.name +
      ' ' +
      cart.surname +
      ' are ' +
      cart.products.length +
      ' tipuri de produse in cart.',
  );
});

console.warn(
  `Afiseaza propozitia: “name are urmatoarele produse in cart: a, b, c, d, e si f.”`,
);

var message = `${cart.name} are urmatoarele produse in cart: `;

cart.products.forEach(function (product, index, products) {
  var punctuation = ', ';

  if (index === products.length - 2) {
    punctuation = ' si ';
  }

  if (index === products.length - 1) {
    punctuation = '.';
  }
  message += `${product.name}${punctuation}`;
});

console.log(message);

console.warn(
  `Afiseaza propozitia “Valoarea totala a cartului lui name este xxx.”`,
);

var cartTotalPrice = 0;
cart.products.forEach(function (product) {
  var pricePerQuantity = product.price * product.quantity;

  cartTotalPrice += pricePerQuantity;
});

console.log(
  `Valoarea totala a cartului lui ${cart.name} este ${cartTotalPrice}.`,
);
console.warn(
  `Afiseaza propozitia “Greutatea totala a cartului lui name este xxx.”`,
);

var cartTotalWeight = 0;
cart.products.forEach(function (product) {
  var weightPerQuantity = product.weight * product.quantity;

  cartTotalWeight += weightPerQuantity;
});

console.log(
  `Greutatea totala a cartului lui ${cart.name} este ${cartTotalWeight}.`,
);

console.warn(`Afiseaza propozitia “Name isi cumpara un total de xxx produse.”`);

var cartTotalProducts = 0;

cart.products.forEach(function (product) {
  cartTotalProducts += product.quantity;
});

console.log(
  `${cart.name} isi cumpara un total de ${cartTotalProducts} produse.`,
);

console.warn(
  `Afiseaza propozitia “Cartul contine produse din categoria Mobile in valoare totala de xxx.”`,
);

var sumMobileCatPrice = 0;

cart.products.forEach(function (product) {
  if (product.category === 'Mobile') {
    sumMobileCatPrice += product.quantity * product.price;
  }
});

console.log(
  `Cartul contine produse din categoria Mobile in valoare totala de ${sumMobileCatPrice}.`,
);

console.warn(
  `Afiseaza propozitia “Greutatea totala a produselor din categoria Mobile este xxx.”`,
);

var sumMobileCatWeight = 0;

cart.products.forEach(function (product) {
  if (product.category === 'Mobile') {
    sumMobileCatWeight += product.quantity * product.weight;
  }
});

console.log(
  `Greutatea totala a produselor din categoria Mobile este ${sumMobileCatWeight}.`,
);

console.warn(
  `Afiseaza propozitia “Totalul pretului per produs din cart este xxx.”`,
);

var totalPricePerProduct = 0;

cart.products.forEach(function (product) {
  totalPricePerProduct += product.price;
});

console.log(
  `Totalul pretului per produs din cart este ${totalPricePerProduct}.`,
);
console.warn(
  `Defineste o variabila numita maximumBudget de tip number cu o valoare arbitrara pozitiva.
    Afiseaza propozitia: “Nume prenume isi permite | nu isi permite cartul.” In functie de pretul total al produselor din cart.`,
);

var maximumBudget = 2400;
var cartTotalPrice = 0;

cart.products.forEach(function (product) {
  cartTotalPrice += product.price * product.quantity;
});

if (maximumBudget >= cartTotalPrice) {
  console.log(`${cart.name} ${cart.surname} isi permite cartul.`);
} else {
  console.log(`${cart.name} ${cart.surname} nu isi permite cartul.`);
}

console.warn(`Defineste o variabila numita maximumWeight de tip number cu o valoare arbitrara pozitiva.
  Afiseaza propozitia “Firma de curierat poate | nu poate livra comanda.” In functie de greutatea totala a produselor din cart.`);

var maximumWeight = 500;
var cartTotalWeight = 0;

cart.products.forEach(function (product) {
  cartTotalWeight += product.weight * product.quantity;
});

if (maximumWeight >= cartTotalWeight) {
  console.log('Firma de curierat poate livra comanda.');
} else {
  console.log('Firma de curierat nu poate livra comanda.');
}
