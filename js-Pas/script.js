// Обработчик события загрузки DOM
document.addEventListener("DOMContentLoaded", function() {
    // Генерация 10 предустановленных паролей при загрузке страницы
    generatePresetPasswords(10); 
});

// Функция генерации пароля
function generatePassword() {
    // Получение желаемой длины пароля из поля ввода
    let length = parseInt(document.getElementById("length").value);

    // Проверка корректности введенной длины
    if (isNaN(length) || length < 4 || length > 100) {
        alert("Пожалуйста, введите длину пароля от 4 до 100 символов.");
        return; // Прерывание функции, если длина некорректна
    }

    // Получение состояния чекбоксов для включения типов символов
    const includeLetters = document.getElementById("includeLetters").checked;
    const includeNumbers = document.getElementById("includeNumbers").checked;
    const includeSymbols = document.getElementById("includeSymbols").checked;

    // Наборы символов для каждого типа
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/";

    // Создание строки с символами для генерации пароля
    let charset = "";
    if (includeLetters) charset += letters;
    if (includeNumbers) charset += numbers;
    if (includeSymbols) charset += symbols;

    // Проверка, выбран ли хотя бы один тип символов
    if (charset === "") {
        alert("Пожалуйста, выберите хотя бы один тип символов!");
        return; // Прерывание функции, если ни один тип не выбран
    }

    // Генерация пароля
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    // Отображение сгенерированного пароля
    const passwordElement = document.getElementById("password");
    passwordElement.innerText = password;
    // Очистка сообщения об ошибке
    document.getElementById("message").innerText = "";
}

// Функция копирования пароля
function copyPassword() {
    const passwordElement = document.getElementById("password");
    const password = passwordElement.innerText;
    if (password) {
        navigator.clipboard.writeText(password).then(() => {
            document.getElementById("message").innerText = "Пароль скопирован в буфер обмена!";
        }).catch(err => {
            console.error('Ошибка при копировании пароля', err);
        });
    }
}

// Функция генерации предустановленных паролей
function generatePresetPasswords(count) {
    const presetPasswordsList = document.getElementById("presetPasswordsList");
    presetPasswordsList.innerHTML = ""; 
    for (let i = 0; i < count; i++) {
        const li = document.createElement("li");
        const password = generateRandomPassword();
        li.innerText = password;
        li.addEventListener("click", () => {
            navigator.clipboard.writeText(password).then(() => {
                alert("Пароль скопирован в буфер обмена!");
            }).catch(err => {
                console.error('Ошибка при копировании пароля', err);
            });
        });
        presetPasswordsList.appendChild(li);
    }
}

// Функция генерации случайного пароля
function generateRandomPassword() {
    const length = 12;
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/";

    const charset = letters + numbers + symbols;
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}