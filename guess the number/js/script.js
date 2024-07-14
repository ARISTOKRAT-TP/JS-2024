let input = document.querySelector(".input_num");
let button = document.querySelector(".num_from_button");
let check = document.querySelector(".check_out");
let help = document.querySelector(".help_out");
let count = document.querySelector(".count_out");

let item = 0;
let RandomNum = 1 + Math.floor(Math.random()*100);
let UserNum;

button.onclick = function(){
    UserNum = input.value;
    console.log(UserNum, RandomNum);
    if (UserNum < RandomNum){
        check.textContent = "Не угадали";
        help.textContent = "Загаданное число чуть больше";
        item++;
        count.textContent =  item;
    } else if (UserNum > RandomNum){
        check.textContent = "Не угадали";
        help.textContent = "Загаданное число чуть меньше";
        item++;
        count.textContent =  item;
    } else{
        check.textContent = "Поздравляем, Вы угадали число!";
        help.textContent = "Вот оно!";
        item++;
        count.textContent =  item;
    }
}