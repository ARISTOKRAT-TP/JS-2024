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

     valid = true;
    if (!name) {
        nameError.textContent = 'Имя обязательно';
        valid = false;
    } else {
        nameError.textContent = '';
    }

    if (!email || !/^\S+@\S+\.\S+$/) {
        emailError.textContent = 'Валидный email обязателен';
        valid = false;
    } else {
        emailError.textContent = '';
    }

    if (!message) {
        messageError.textContent = 'Сообщение обязательно';
        valid = false;
    } else {
        messageError.textContent = '';
    }

    if (!polygon) {
        polygonError.textContent = 'Полигональность обязательна';
        valid = false;
    } else {
        polygonError.textContent = '';
    }

    if (!modeltype) {
        modelTypeError.textContent = 'Тип модели обязателен';
        valid = false;
    } else {
        modelTypeError.textContent = '';
    }


});
