// //Folosind elementul stage, adauga un event de mouseover care sa afiseze in elementul paragraf mesajul: “Mouseul este pe scena” atunci cand mouseul face hover pe aceasta.
// //Folosind mouseout, afiseaza in paragraf mesajul “Mouseul nu este pe scena”.
// //Afiseaza intr-un alt element de cate ori mouseul a fost pe scena.

// // black box function with no side effects

// function createLog(message) {
//   const messageContainer = document.createElement('p');
//   messageContainer.innerText = message;

//   return messageContainer;
// }

// const stage = document.querySelector('.pane .stage');
// const logsContainer = document.querySelector('.logs');
// let counter = 0;
// let counterOut = 0;
// let counterInOut = 0;

// stage.addEventListener('mouseover', function () {
//   const log = createLog('Mouseul este pe scena');
//   counter = counter + 1;
//   counterInOut = counterOut + counter;

//   const counterInOutLog = createLog(
//     `Mouseul a trecut de ${counterInOut} ori peste oricare din laturile patratului.`,
//   );

//   const counterLog = createLog(`Mouseul a fost pe scena de ${counter} ori`);
//   logsContainer.append(log);
//   logsContainer.append(counterInOutLog);
//   logsContainer.append(counterLog);
// });

// stage.addEventListener('mouseout', function () {
//   const log = createLog('Mouseul NU este pe scena');
//   counterOut = counterOut + 1;
//   counterInOut = counterOut + counter;

//   const counterInOutLog = createLog(
//     `Mouseul a trecut de ${counterInOut} ori peste oricare din laturile patratului.`,
//   );

//   logsContainer.append(log);
//   logsContainer.append(counterInOutLog);
// });
