const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

startBtn.addEventListener('click', () => {
  console.log('start pressed');
});

stopBtn.addEventListener('click', () => {
  console.log('stop pressed');
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

//  body.style.cssText = `width: ${size}px; height: ${size}px; background-color:${getRandomHexColor()}`;
