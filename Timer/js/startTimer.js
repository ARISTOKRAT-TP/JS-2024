document.addEventListener('DOMContentLoaded', function () {
  let timeInput = document.querySelector('.time-input');
  let timeButton = document.querySelector('.time-button')
  let timeBlock = document.querySelector('.time-block');
  function inputTime() {
    timeBlock.textContent = timeInput.value;
  }

  let timerID;
  function start() {
    clearInterval(timerID); // Сбрасываем таймер
    let time = parseInt(timeInput.value); // Запоминаем исходное значение
    timerID = setInterval(function() {
      const res = --time; // Каждый вызов уменьшаем
      timeBlock.textContent = res; // Выводим результат
      if (!res) {clearInterval(timerID);
                 alert("ВРЕМЯ ВЫШЛО!");};
    }, 1000)
  }
  timeButton.addEventListener('click', start);

  timeInput.addEventListener('input', inputTime);

});