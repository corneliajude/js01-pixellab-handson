var userInput = prompt('Introdu un numar:');
var number = Number(userInput);
var limit = 20;
var paragraphElement = document.getElementById('message');

if (isNaN(number) || userInput === null || userInput.trim() === '') {
  var message = 'Nu s-a introdus un numar.';

  paragraphElement.innerText = message;
} else if (number === limit) {
  var message = `Numarul este egal cu ${limit}`;

  paragraphElement.innerText = message;
} else if (number > limit) {
  var message = `Numarul este mai mare decat ${limit}`;

  paragraphElement.innerText = message;
} else {
  var message = `Numarul este mai mic decat ${limit}`;

  paragraphElement.innerText = message;
}
