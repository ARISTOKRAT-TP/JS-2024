
let deadline;

//функция сохранения даты
function save() {
  console.log({day:document.getElementById('day').value})
  let deadline1 = {day:document.getElementById('day').value};
  deadline = new Date(deadline1.day);
  console.log(deadline)
  if (deadline != 'Invalid Date'){
    alert('Дата сохранена');
  } else {
    alert('Введите дату!')
  }
}

//функция отсчета времени
function counting() {

  if (!deadline || deadline == 'undefined'){
    alert('Введите дату!')
  }

  diff0 = deadline - new Date();
  if (diff0 <= 0) {
    alert('Эта дата уже наступила. Выберите другую')
  }


    // склонение дней, часов, минут и секунд
    function declensionNum(n, text_forms) {  
        n = Math.abs(n) % 100; 
        let n1 = n % 10;
        if (n > 10 && n < 20) { return text_forms[2]; }
        if (n1 > 1 && n1 < 5) { return text_forms[1]; }
        if (n1 == 1) { return text_forms[0]; }
        return text_forms[2];
    }

    // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
    function countdownTimer() {

    // id таймера
    let timerId = null;

      const diff = deadline - new Date();

      if (diff <= 0) {
        clearInterval(timerId);
        alert('Дата наступила!')
      }

      const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
      const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 - 3 : 0;
      const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
      const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;

      //устанавливаем количество дней, часов, минут, секунд
      $days.textContent = days < 10 ? '0' + days : days;
      $hours.textContent = hours < 10 ? '0' + hours : hours;
      $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
      $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;

      // изменяем подписи под таймером
      $days.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
      $hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
      $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
      $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
    }

    // получаем элементы, содержащие компоненты даты с сайта
    const $days = document.querySelector('.timer__days');
    const $hours = document.querySelector('.timer__hours');
    const $minutes = document.querySelector('.timer__minutes');
    const $seconds = document.querySelector('.timer__seconds');
    
    // вызываем функцию countdownTimer
    countdownTimer();
    
    // вызываем функцию countdownTimer каждую секунду
    timerId = setInterval(countdownTimer, 1000);

  };