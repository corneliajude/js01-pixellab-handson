const controls = document.querySelector('.controls');
const boxOne = document.getElementById('box-1');
const boxTwo = document.getElementById('box-2');
const boxThree = document.getElementById('box-3');
let box = document.querySelectorAll('.box');
const colorInput = controls.querySelector('.color-input');
colorInput.placeholder = 'Input hex value';
const resetButton = controls.querySelector('.reset-button');

// event delegation
controls.addEventListener('click', function (event) {
  // event.target = elementul de pe care a plecat clickul
  const target = event.target;

  if (
    target.nodeName !== 'BUTTON' ||
    !target.dataset.color ||
    target.dataset.color.trim().length <= 0
  ) {
    return;
  }

  const button = target;
  const color = button.dataset.color;
  if (boxOne.checked) {
    boxOne.parentElement.style.backgroundColor = color;
  } else if (boxTwo.checked) {
    boxTwo.parentElement.style.backgroundColor = color;
  } else if (boxThree.checked) {
    boxThree.parentElement.style.backgroundColor = color;
  }
});

colorInput.addEventListener('keydown', function (event) {
  // dom traversal
  const input = event.currentTarget;
  const button = input.previousElementSibling;
  const value = input.value;
  input.placeholder = 'Input hex value';

  if (/^#?([a-f0-9]{6}|[a-f0-9]{3})$/.test(value) && event.key === 'Enter') {
    button.dataset.color = value;
    button.style.backgroundColor = value;
    input.value = '';
  } else if (event.key === 'Enter') {
    input.placeholder = 'Try hex value';
    input.value = '';
  }
});

resetButton.addEventListener('click', function () {
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(function (box) {
    box.removeAttribute('style');
  });
});
