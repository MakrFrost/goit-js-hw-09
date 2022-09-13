const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.getElementsByTagName('body')[0];
let timerId = null;
import Notiflix from 'notiflix';

startBtn.addEventListener('click', bodyColorOn);
stopBtn.addEventListener('click', bodyColorOff);

function bodyColorOn() {
  startBtn.setAttribute('disabled', true);
  timerId = setInterval(getBodyColor, 1000);
}

function getBodyColor() {
  body.style.cssText = `background-color:${getRandomHexColor()}`;
  Notiflix.Notify.info(`Цвет изменён на ${getRandomHexColor()}`);
}

function bodyColorOff() {
  startBtn.removeAttribute('disabled', false);
  clearTimeout(timerId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
