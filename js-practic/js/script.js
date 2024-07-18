//Массив данных для викторины
const quizData = [
    {
    question: "В каких годах строился Нижегородский каменный кремль?",
    a: "1221-1227",
    b: "1508-1515",
    c: "1556-1564",
    correct: "b",
    },
    {
    question: "При каком царе строился Нижегородский кремль?",
    a: "Василий 3",
    b: "Иван 4",
    c: "Дмитрий Донской",
    correct: "a",
    },
    {
    question: "Сколько башен в Нижегородском кремле?",
    a: "14",
    b: "16",
    c: "13",
    correct: "c",
    },
    {
    question: "Какая башня считается главной?",
    a: "Георгиевская",
    b: "Дмитриевская",
    c: "Зачатьевская",
    correct: "b",
    },
    {
    question: "Почему Пороховая башня так называется?",
    a: "В ней хранились пороховые бочки",
    b: "Её часто взрывали враги",
    c: "По легенде, при создании башни в смесь для укладк кирпичей добавляли порох",
    correct: "a",
    },
    {
    question: "Кто руководил строительством Нижегородского кремля?",
    a: "Пьетро Франческо",
    b: "Пьер Тоскане",
    c: "Антон Фрязин",
    correct: "a",
    },
    {
    question: "Сколько раз Нижегородский кремль брали штурмом?",
    a: "0",
    b: "1",
    c: "2",
    correct: "a",
    },
    {
    question: "Какая отличительная черта Нижегородского кремля?",
    a: "Самая большая площадь",
    b: "Самые высокие стены",
    c: "Можно сделать полный обход по стенам",
    correct: "c",
    },
    {
    question: "Какая длина стен у Нижегородского кремля?",
    a: "2000 метров",
    b: "2045 метров",
    c: "2105 метров",
    correct: "b",
    },
    {
    question: "Какие формы башен есть в Нижегородском кремле?",
    a: "Круглые и квадратные",
    b: "Круглые",
    c: "Квадратные",
    correct: "a",
    },
    {
    question: "Почему Нижегородский кремль утратил оборонное значение?",
    a: "Появилась артиллерия",
    b: "Кремль постепенно разрушался",
    c: "Границы государства отодвинулись далеко на восток",
    correct: "c",
    },
    {
    question: "На какой башне находится икона Святого Георгия?",
    a: "Зачатьевская",
    b: "Дмитриевская",
    c: "Коромыслова",
    correct: "b",
    },
    {
    question: "Сколько башен имели ворота?",
    a: "5",
    b: "4",
    c: "6",
    correct: "a",
    },
    {
    question: "Почему некоторые башни Нижегородского кремля носят названия в честь Христианских Святых?",
    a: "Башни строились рядом с церквями, названными в честь этих Святых",
    b: "Считалось, что Святые будут защищать эти башни",
    c: "Так было принято",
    correct: "a",
    },
    {
    question: "Вам понравился данный квиз?",
    a: "Да",
    b: "Да!",
    c: "Очень понравился!",
    correct: "c",
    },
    
    ];
    
    //получение элементов DOM по их идентификаторам
    const startPage = document.getElementById('startPage');
    const quiz = document.getElementById('quiz');
    const resultsPage = document.getElementById('resultsPage');
    const usernameInput = document.getElementById('username');
    const startQuizButton = document.getElementById('startQuiz');
    const viewResultsButton = document.getElementById('viewResults');
    const questionElement = document.getElementById('question');
    const answerElements = document.querySelectorAll('.answer');
    const a_text = document.getElementById('a_text');
    const b_text = document.getElementById('b_text');
    const c_text = document.getElementById('c_text');
    const submit = document.getElementById('submit');
    const resultsTable = document.getElementById('resultsTable');
    
    //переменные для текущего вопроса, счета и имени пользователя
    let currentQuiz = 0;
    let score = 0;
    let username = "";
    
    //Обработчик клика для кнопки начала викторины
    startQuizButton.addEventListener('click', () => {
    username = usernameInput.value.trim();
    if (username) {
    startPage.style.display = 'none';
    quiz.style.display = 'block';
    loadQuiz();
    } else {
    alert('Введите своё имя, пожалуйста!');
    }
    });
    
    //Обработчик клика для кнопки просмотра результатов
    viewResultsButton.addEventListener('click', () => {
    startPage.style.display = 'none';
    resultsPage.style.display = 'block';
    loadResults();
    });
    
    //Обработчик клика для кнопки отправки ответов
    submit.addEventListener('click', () => {
    const answer = getSelected();
    
    if (answer) {
    if (answer === quizData[currentQuiz].correct) {
    score++;
    }
    
    currentQuiz++;
    
    if (currentQuiz < quizData.length) {
    loadQuiz();
    } else {
    saveResult();
    quiz.innerHTML = `<h2>Ваш результат - ${score}/${quizData.length} !</h2>
    <button onclick="location.reload()">В начало</button>`;
    }
    }
    });
    
    //Функция загрузки вопроса
    function loadQuiz() {
    deselectAnswers();
    
    const currentQuizData = quizData[currentQuiz];
    
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    }
    
    //Функция снятия выделения с ответов
    function deselectAnswers() {
    answerElements.forEach(answerEl => answerEl.checked = false);
    }
    
    //Функция получения выбранного ответа
    function getSelected() {
    let answer;
    
    answerElements.forEach(answerEl => {
    if (answerEl.checked) {
    answer = answerEl.id;
    }
    });
    
    return answer;
    }
    

    //Функция сохранения результата
    function saveResult() {
    let results = localStorage.getItem('results');
    if (!results) {
    results = [];
    } else {
    results = JSON.parse(results);
    }
    
    results.push({ username, score });
    localStorage.setItem('results', JSON.stringify(results));
    }
    
    //Функция загрузки результатов
    function loadResults() {
    let results = localStorage.getItem('results');
    if (results) {
    results = JSON.parse(results);
    results.forEach(result => {
    const row = resultsTable.insertRow();
    const usernameCell = row.insertCell(0);
    const scoreCell = row.insertCell(1);
    usernameCell.textContent = result.username;
    scoreCell.textContent = result.score;
    });
    }
    }
    
    //Функция показа стартовой страницы
    function showStartPage() {
    resultsPage.style.display = 'none';
    startPage.style.display = 'block';
    }