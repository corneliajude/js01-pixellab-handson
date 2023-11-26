(function () {
  document.addEventListener('DOMContentLoaded', function () {
    const showButton = document.querySelector('#showButton');
    const toggleEventButton = document.querySelector('#toggleEventButton');
    const removeButtons = document.querySelector('#removeButtons');
    let eventBound = true;

    function showAlert() {
      alert('Butonul a fost apasat');
    }

    showButton.addEventListener('click', showAlert);
    showMessage('Alerta va fi afisata');

    toggleEventButton.addEventListener('click', function () {
      if (eventBound === true) {
        showButton.removeEventListener('click', showAlert);
        this.innerText = 'Porneste afisarea';
        showMessage('Alerta NU va fi afisata');
        eventBound = false;
      } else {
        showButton.addEventListener('click', showAlert);
        this.innerText = 'Opreste afisarea';
        showMessage('Alerta va fi afisata');
        eventBound = true;
      }
    });

    removeButtons.addEventListener('click', function () {
      if (window.confirm('Esti sigur ca vrei sa stergi butoanele din DOM?')) {
        toggleEventButton.remove();
        showButton.remove();
      }
    });

    function showMessage(message) {
      const className = 'message';
      let paragraphElement = document.querySelector('.' + className);

      if (paragraphElement === null) {
        paragraphElement = document.createElement('p');
        paragraphElement.classList.add('message');
        document.body.append(paragraphElement);
      }
      paragraphElement.innerText = message;
    }
  });
})();
