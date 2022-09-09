import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  // выбираем будующую дату
  onClose(selectedDates) {
    if (Date.now() > selectedDates[0]) {
      Notiflix.Notify.failure('Please choose a date in the future');
      return;
    }
    finnalyDate = selectedDates[0];
    startEl.disabled = false;
  },
};

const dateTimePicker = document.getElementById('datetime-picker');
const startEl = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

flatpickr(dateTimePicker, options);

let finnalyDate;
console.log(finnalyDate);
let timerId = null;
startEl.disabled = true;

startEl.addEventListener('click', startTime);

// запускаем таймер на обратный отсчёт
function startTime() {
  startEl.disabled = true;
  Notiflix.Notify.success('Обратный отсчёт запущен!');
  timerId = setInterval(() => {
    // класс времени
    let timeD = finnalyDate - Date.now();
    const { days, hours, minutes, seconds } = convertMs(timeD);
    daysEl.textContent = addLeadingZero(days);
    hoursEl.textContent = addLeadingZero(hours);
    minutesEl.textContent = addLeadingZero(minutes);
    secondsEl.textContent = addLeadingZero(seconds);

    // конец счёта
    if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
      clearInterval(timerId);
      Notiflix.Notify.warning('Отсчёт закончился!');
      timerId = null;
    }
  }, 1000);
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
