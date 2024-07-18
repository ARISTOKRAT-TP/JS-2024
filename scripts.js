// Получаем элемент формы по ID и добавляем обработчик события
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение формы

    // Получаем значения полей формы
    name = document.getElementById('name').value.trim();
    email = document.getElementById('email').value.trim();
    message = document.getElementById('message').value.trim();
    polygon = document.querySelector('input[name="polygon"]:checked') ? document.querySelector('input[name="polygon"]:checked').value : '';
    modeltype = document.getElementById('model-type').value.trim();

    // Получаем элементы для отображения ошибок
    nameError = document.getElementById('name-error');
    emailError = document.getElementById('email-error');
    messageError = document.getElementById('message-error');
    polygonError = document.getElementById('polygon-error');
    modelTypeError = document.getElementById('model-type-error');

    // Переменная для отслеживания валидности формы
     valid = true;

     // Проверяем, если поле "name" пустое, то показываем ошибку
    if (!name) {
        nameError.textContent = 'Имя обязательно';
        valid = false;
    } else {
        nameError.textContent = '';
    }

    // Проверяем, если поле "email" пустое или невалидный формат
    if (!email || !/^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i.test(email)) {
        emailError.textContent = 'Валидный email обязателен';
        valid = false;
    } else {
        emailError.textContent = '';
    }

    // Проверяем, если поле "message" пустое, то показываем ошибку
    if (!message) {
        messageError.textContent = 'Сообщение обязательно';
        valid = false;
    } else {
        messageError.textContent = '';
    }

    // Проверяем, если поле "polygon" не выбрано, то показываем ошибку
    if (!polygon) {
        polygonError.textContent = 'Полигональность обязательна';
        valid = false;
    } else {
        polygonError.textContent = '';
    }

    // Проверяем, если поле "modeltype" пустое, то показываем ошибку
    if (!modeltype) {
        modelTypeError.textContent = 'Тип модели обязателен';
        valid = false;
    } else {
        modelTypeError.textContent = '';
    }

          function changeColor() {
              let button = document.querySelector(".color-button"); // Получаем элемент кнопки
              let originalColor = button.style.backgroundColor; // Сохраняем исходный цвет

              // Меняем цвет кнопки на зеленый
              button.style.backgroundColor = "green";

              // Возвращаем исходный цвет через одну секунду
              setTimeout(function() {
                  button.style.backgroundColor = originalColor;
              }, 100);
          }

});
