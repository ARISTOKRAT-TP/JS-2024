var originalTransform = '';

    // Функция для уменьшения размера изображения
    function toggleImageSize() {
        var monPaj = document.querySelector('.monPaj');
        originalTransform = monPaj.style.transform; // Сохраняем текущее значение transform
        monPaj.style.transform = 'scale(0.8)'; // Устанавливаем масштаб 0.8
    }
    
    // Функция для восстановления исходного размера изображения
    function resetImageSize() {
        var monPaj = document.querySelector('.monPaj');
        monPaj.style.transform = originalTransform; // Восстанавливаем исходное значение transform
    }
    
    // Функция для анимации качели изображения
    function swingImage() {
        var monPaj = document.querySelector('.monPaj');
        monPaj.style.animation = 'swingAnimation 0.5s ease'; // Запускаем анимацию swingAnimation
        setTimeout(function() {
            monPaj.style.animation = ''; // Очищаем анимацию после 0.5 секунды
        }, 500);
    }

    // Функция для переключения дополнительного текста
	function toggleAdditionalText() {
		var additionalText = document.getElementById('additionalText'); // Получаем элемент по его id 'additionalText' и сохраняем его в переменную additionalText
		if (additionalText.style.display === 'block') {
			// Если текст отображается, скрываем его с анимацией
			additionalText.style.animation = 'textAnimationHide 0.5s forwards'; // Применяем анимацию textAnimationHide длительностью 0.5 секунды с заполнением состояния
			setTimeout(function() {
				additionalText.style.display = 'none'; // Скрываем элемент после завершения анимации через 0.5 секунды
			}, 500);
		} else {
			// Если текст скрыт, показываем его с анимацией
			additionalText.style.display = 'block'; // Отображаем элемент
			additionalText.style.animation = 'textAnimationShow 0.5s forwards'; // Применяем анимацию textAnimationShow длительностью 0.5 секунды с заполнением состояния
		}
	}


	// Функция для переключения информационного блока
	function toggleInfo() {
		var infoBlock = document.getElementById('infoBlock'); // Получаем элемент с id 'infoBlock' и сохраняем его в переменную infoBlock
		var quizBlock = document.getElementById('quizBlock'); // Получаем элемент с id 'quizBlock' и сохраняем его в переменную quizBlock

		if (infoBlock.classList.contains('show')) {
			// Если информационный блок показан, скрываем его
			infoBlock.classList.remove('show'); // Удаляем класс 'show' у элемента infoBlock, чтобы скрыть блок
			quizBlock.style.bottom = '50vh'; // Устанавливаем свойство bottom для quizBlock на 50% высоты окна, чтобы корректно отображать элемент под информационным блоком
		} else {
			// Если информационный блок скрыт, показываем его
			infoBlock.classList.add('show'); // Добавляем класс 'show' элементу infoBlock, чтобы показать блок
			quizBlock.style.bottom = '10vh'; // Устанавливаем свойство bottom для quizBlock на 10% высоты окна, чтобы поднять его над информационным блоком
		}
	}


    function expandQuizBlock() {
        // Перенаправление на другую страницу
        window.location.href = 'test1.htm';
    }

    
