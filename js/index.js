document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Создаем объект для хранения данных формы
        const formData = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        // Преобразуем объект данных формы в JSON
        const jsonData = JSON.stringify(formData);

        // Отправляем JSON-данные на сервер
        fetch('/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: jsonData
        })
        .then(response => {
            if (response.ok) {
                console.log('Contact saved successfully');
                // Сбрасываем форму после отправки
                form.reset();
            } else {
                console.error('Error saving contact');
            }
        })
        .catch(error => console.error('Ошибка:', error));
    });
});
