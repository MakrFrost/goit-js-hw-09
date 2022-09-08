import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', newPromise);

function newPromise(event) {
  event.preventDefault();

  let delay = Number(formEl.delay.value);
  let amount = Number(formEl.amount.value);
  let step = Number(formEl.step.value);

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay)
      .then(result => Notiflix.Notify.success(result))
      .catch(error => Notiflix.Notify.failure(error));

    delay += step;
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    let shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve(
          `Fulfilled promise ${position} in ${delay}ms. Ваш промiс було виконано!`
        );
      }
      reject(
        `Rejected promise ${position} in ${delay}ms. Ваш промiс було забраковано!`
      );
    }, delay);
  });
}
