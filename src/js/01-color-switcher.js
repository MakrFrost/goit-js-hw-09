const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.getElementsByTagName('body')[0];

startBtn.addEventListener('click', bodyColor);
stopBtn.addEventListener('click', () => {
  console.log('stop pressed');
});

function bodyColor() {
  body.style.cssText = `background-color :${getRandomHexColor()}`;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
