    // Обработчик события при загрузке DOM
    document.addEventListener('DOMContentLoaded', function() {
        var quizQuestions = document.querySelectorAll('.quizQuestion');
        var firstAttemptCorrect = 0;
        var firstAttemptWrong = 0;
        var submitButton = document.getElementById('submitButton');

        // Функция для подсчета правильных и неправильных ответов
        function calculateScore() {
            var totalQuestions = quizQuestions.length;
            var correctAnswers = 0;

            quizQuestions.forEach(function(question) {
                var radioButtons = question.querySelectorAll('input[type="radio"]');
                var isCorrect = false;
                var isFirstAttempt = true;

                radioButtons.forEach(function(radio) {
                    if (radio.checked) {
                        var label = radio.nextElementSibling;
                        if (radio.hasAttribute('data-correct')) {
                            label.style.backgroundColor = 'rgba(0, 255, 0, 0.5)'; // Правильный ответ
                            correctAnswers++;
                            isCorrect = true;
                        } else {
                            label.style.backgroundColor = 'rgba(255, 0, 0, 0.5)'; // Неправильный ответ
                            if (isFirstAttempt) {
                                firstAttemptWrong++;
                            }
                        }
                        isFirstAttempt = false; // После первого выбора
                    }
                });

                // Если правильный ответ выбран, отключаем все радио-кнопки
                if (isCorrect) {
                    radioButtons.forEach(function(radio) {
                        radio.disabled = true;
                    });
                }
            });

            // Показываем результаты теста
            var resultsDiv = document.getElementById('results');
            resultsDiv.style.opacity = '1'; // Показываем результаты, если они были скрыты
            
            // Выводим результаты теста
            var scoreDiv = document.getElementById('score');
            scoreDiv.innerHTML = 'Количество правильных ответов: ' + correctAnswers + ' из ' + totalQuestions;

            var firstAttemptStatsDiv = document.getElementById('firstAttemptStats');
            firstAttemptStatsDiv.innerHTML = 'Ошибки при первых попытках: ' + firstAttemptWrong;
        }

        // Функция для проверки выбора хотя бы одного ответа
        function checkAnswerSelection() {
            var anyChecked = false;
            quizQuestions.forEach(function(question) {
                var radioButtons = question.querySelectorAll('input[type="radio"]');
                radioButtons.forEach(function(radio) {
                    if (radio.checked) {
                        anyChecked = true;
                    }
                });
            });

            if (anyChecked) {
                submitButton.classList.remove('submitButtonHidden');
                submitButton.classList.add('submitButtonVisible');
            }
        }

        // Назначаем обработчики событий на радио-кнопки для каждого вопроса в викторине
        quizQuestions.forEach(function(question) {
            var radioButtons = question.querySelectorAll('input[type="radio"]');
            radioButtons.forEach(function(radio) {
                radio.addEventListener('change', function() {
                    calculateScore(); // Вызываем функцию calculateScore при изменении выбора
                    checkAnswerSelection(); // Проверяем выбор ответа
                });
            });
        });

        // Добавляем анимации для вопросов
		quizQuestions.forEach(function(question, index) { // Итерируемся по каждому элементу с классом 'quizQuestion'. 'question' - текущий элемент, 'index' - его порядковый номер
			setTimeout(function() { // Устанавливаем таймер для выполнения анимации с задержкой
				question.classList.add(index % 2 === 0 ? 'slideInLeft' : 'slideInRight'); // Добавляем класс 'slideInLeft' к четным элементам и 'slideInRight' к нечетным элементам
			}, index * 500); // Задержка для каждого элемента составляет index * 500 миллисекунд
		});

        // Анимация для черной формы
        var quizOpros = document.getElementById('quizOpros');
        quizOpros.classList.add('fallIn');

        // Показать кнопки после завершения анимации формы
        quizOpros.addEventListener('animationend', function() {
            var buttonContainer = document.getElementById('buttonContainer');
            buttonContainer.classList.add('buttonsVisible');
        });
    });

    function showResults() {
        var quizOpros = document.getElementById('quizOpros');
        var results = document.getElementById('results');

        // Скрываем тест
        quizOpros.style.display = 'none';

        // Показываем результаты
        results.style.display = 'block';
        results.classList.add('fadeIn'); // Добавляем анимацию для появления результатов
    }

    function expandQuizBlock() {
        // Перенаправление на другую страницу
        window.location.href = 'index1.htm'; // Замените 'путь-к-вашей-странице' на реальный URL
    }