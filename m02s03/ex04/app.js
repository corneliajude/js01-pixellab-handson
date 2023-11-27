//Foloseste elementul image pentru a afisa intr-un paragraf mesajul “Imaginea s-a incarcat.”, folosind eventul load.
//Adauga in HTML, in paragraf, textul: “Imaginea se incarca…” si schimba textul din paragraf in “Imaginea s-a incarcat.” atunci cand aceasta s-a incarcat.
//Atunci cand imaginea s-a incarcat, adauga pe elementul image un eveniment de click care sa afiseze intr-o alerta mesajul: “Imaginea cu URLul: … s-a incarcat.”

const image = document.querySelector('.image');

function showMessage(message) {
  const messageContainer = document.querySelector('p');
  messageContainer.innerText = message;

  // side effect
  document.body.append(messageContainer);
}

image.addEventListener('load', function () {
  showMessage('Imaginea s-a incarcat');
});

image.addEventListener('click', function (event) {
  alert(`Imaginea cu URLul: ${event.currentTarget.src} s-a incarcat`);
});
