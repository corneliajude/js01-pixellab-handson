function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const miliseconds = date.getMilliseconds();
  return `${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${miliseconds}`;
}

const exactTime = getTime();

console.log(`${getTime()}, am ajuns la Pixellab`);

const messageElement = document.getElementById('message');
messageElement.innerText = `${exactTime}, am ajuns la Pixellab.`
