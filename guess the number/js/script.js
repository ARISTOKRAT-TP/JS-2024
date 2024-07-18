/**
 * btn010, btn0100, btn01000 - кнопки выбора диапазона загаданного числа.
 * your_range - блок с формой, где пользователь вводит свой диапазон
 * num1 - число, с которого начинается диапазон пользователя
 * num2 - число, на которое диапазон пользователя заканчивается
 * your_num - кнопка вводя диапазона пользователя
 * form - блок с формой ввода числа
 * result - блок с ответами. угадал ли пользователь
 * info -  строка с объяснениями игры
 * input - лейбл с вводом числа
 * button_check - кнопка проверки числа
 * check - строка с информацией, угадал ли пользователь
 * help -  строка с подсказкой 
 * count - счётчик попыток
 */

let btn_010 = document.querySelector(".range10");
let btn_0100 = document.querySelector(".range100");
let btn_01000 = document.querySelector(".range1000");
let your_range = document.querySelector(".your_range");
let num1  = document.querySelector(".num1");
let num2  = document.querySelector(".num2");
let your_num = document.querySelector(".your_num");

let form = document.querySelector(".form");
let result = document.querySelector(".result");
let info = document.querySelector(".info");

let input = document.querySelector(".input_num");
let button_check = document.querySelector(".num_from_button");
let check = document.querySelector(".check_out");
let help = document.querySelector(".help_out");
let count = document.querySelector(".count_out");


/**
 * item - счётчик попыток
 * RandomNum - загаданное число
 * RandomNum10 - рандомное число от 0 до 10
 * RandomNum100 - рандомное число от 0 до 100
 * RandomNum1000 - рандомное число от 0 до 1000
 * UserNum - число, введенное пользователем
 */

let item = 0;
let RandomNum=-1;
let RandomNum10 = 1 + Math.floor(Math.random()*10);
let RandomNum100 = 1 + Math.floor(Math.random()*100);
let RandomNum1000 = 1 + Math.floor(Math.random()*1000);
let min, max;
let UserNum;



/**
 * функции, срабатывающее при нажатии кнопок
 * btn_010 - загадывает число от 0 до 10
 * btn_0100 - загадывает число от 0 до 100
 * btn_01000 - загадывает число от 0 до 1000
 */

btn_010.onclick = function() {
    RandomNum = RandomNum10;
    form.style.display = "block";
    result.style.display = "block";
    info.textContent = "Мы загадали случайное число от 0 до 10. Попытайтесь его угадать.";
    btn_010.style.display = "none";
    btn_0100.style.display = "none";
    btn_01000.style.display = "none";
    your_range.style.display = "none";
};

btn_0100.onclick = function() {
    RandomNum = RandomNum100;
    form.style.display = "block";
    result.style.display = "block";
    info.textContent = "Мы загадали случайное число от 0 до 100. Попытайтесь его угадать.";
    btn_010.style.display = "none";
    btn_0100.style.display = "none";
    btn_01000.style.display = "none";
    your_range.style.display = "none";
};

btn_01000.onclick = function() {
    RandomNum = RandomNum1000;
    form.style.display = "block";
    result.style.display = "block";
    info.textContent = "Мы загадали случайное число от 0 до 1000. Попытайтесь его угадать.";
    btn_010.style.display = "none";
    btn_0100.style.display = "none";
    btn_01000.style.display = "none";
    your_range.style.display = "none";
};

your_num.onclick = function() {
    min = Number(num1.value);
    max = Number(num2.value);
    let RandomNumUser =(Math.floor(Math.random()*(max - min +1)) + min);
    RandomNum = RandomNumUser;
    form.style.display = "block";
    result.style.display = "block";
    info.textContent = "Мы загадали случайное число от " + min + " до " + max +" . Попытайтесь его угадать.";
    btn_010.style.display = "none";
    btn_0100.style.display = "none";
    btn_01000.style.display = "none";
    your_range.style.display = "none";
    console.log(min, max, RandomNumUser);
};

/**
 * функция проверки числа на правильность при нажатии кнопки "Проверить"
 */

button_check.onclick = function(){
    UserNum = input.value;
    console.log(UserNum, RandomNum);
    if (UserNum < RandomNum){
        if ((RandomNum - UserNum) <=5){
            help.textContent = "Загаданное число чуть-чуть больше"; 
        }else if (5<(RandomNum - UserNum) && (RandomNum - UserNum)<=10){
            help.textContent = "Загаданное число немного больше"; 
        }else if (10<(RandomNum - UserNum) && (RandomNum - UserNum)<=60){
            help.textContent = "Загаданное число больше"; 
        }else if (60<(RandomNum - UserNum) && (RandomNum - UserNum)<=300){
            help.textContent = "Загаданное число намного больше"; 
        }else{
            help.textContent = "Загаданное число гораздо больше"; 
        }
        check.textContent = "Не угадали";
        item++;
        count.textContent =  item;
    } else if (UserNum > RandomNum){
        if ((UserNum - RandomNum) <=5){
            help.textContent = "Загаданное число чуть-чуть меньше"; 
        }else if (5<(UserNum - RandomNum) && (UserNum - RandomNum)<=10){
            help.textContent = "Загаданное число немного меньше"; 
        }else if (10<(UserNum - RandomNum) && (UserNum - RandomNum)<=60){
            help.textContent = "Загаданное число меньше"; 
        }else if (60<(UserNum - RandomNum) && (UserNum - RandomNum)<=300){
            help.textContent = "Загаданное число намного меньше"; 
        }else{
            help.textContent = "Загаданное число гораздо меньше"; 
        }
        check.textContent = "Не угадали";
        item++;
        count.textContent =  item;
    } else{
        check.textContent = "Поздравляем, Вы угадали число!";
        help.textContent = "Вот оно!";
        item++;
        count.textContent =  item;
    }
}


