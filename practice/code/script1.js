/**
 * Функция convert() отвечает за ковертирование единиц измерения длины, исходя из введенных пользователем данных.
 * Переменная inputValue отвечает за получение значения из введенного пользователем числа.
 * Переменная fromUnit отвечает за получение значения из первого поля, заполненного пользователем.
 * Переменная toUnit отвечает за получение значения из второго поля, заполненного пользователем.
 */
function convert() { 

    // Извлечение входных значений.
    let inputValue =  
        document.getElementById("inputValue").value; 

    let fromUnit =  
        document.getElementById("fromUnit").value; 

    let toUnit =  
        document.getElementById("toUnit").value; 

    // Преобразование длины в соответствии с выбранными единицами измерения.
    let result; 

    if (fromUnit === "km" && toUnit === "km") { 
        result = inputValue * 1;
    } else if (fromUnit === "km" && toUnit === "m") { 
        result = inputValue * 1000;
    } else if (fromUnit === "km" && toUnit === "dm)") { 
        result = inputValue * 10000;
    } else if (fromUnit === "km" && toUnit === "sm") { 
        result = inputValue * 100000;
    } else if (fromUnit === "km" && toUnit === "mm") { 
        result = inputValue * 1000000;
    } else if (fromUnit === "km" && toUnit === "mkm") { 
        result = inputValue * 1000000000;
    } else if (fromUnit === "km" && toUnit === "nm") { 
        result = inputValue * 1000000000000;

    } else if (fromUnit === "m" && toUnit === "km") { 
        result = inputValue / 1000;
    } else if (fromUnit === "m" && toUnit === "m") { 
        result = inputValue * 1;
    } else if (fromUnit === "m" && toUnit === "dm") { 
        result = inputValue * 10;
    } else if (fromUnit === "m" && toUnit === "sm") { 
        result = inputValue * 100;
    } else if (fromUnit === "m" && toUnit === "mm") { 
        result = inputValue * 1000;
    } else if (fromUnit === "m" && toUnit === "mkm") { 
            result = inputValue * 1000000;
    } else if (fromUnit === "m" && toUnit === "nm") { 
        result = inputValue * 1000000000;

    } else if (fromUnit === "dm" && toUnit === "km") { 
        result = inputValue / 10000;
    } else if (fromUnit === "dm" && toUnit === "m") { 
        result = inputValue / 10;
    } else if (fromUnit === "dm" && toUnit === "dm") { 
        result = inputValue * 1;
    } else if (fromUnit === "dm" && toUnit === "sm") { 
        result = inputValue * 10;
    } else if (fromUnit === "dm" && toUnit === "mm") { 
        result = inputValue * 100;
    } else if (fromUnit === "dm" && toUnit === "mkm") { 
            result = inputValue * 100000;
    } else if (fromUnit === "dm" && toUnit === "nm") { 
        result = inputValue * 100000000;

    } else if (fromUnit === "sm" && toUnit === "km") { 
        result = inputValue / 100000;
    } else if (fromUnit === "sm" && toUnit === "m") { 
        result = inputValue / 100;
    } else if (fromUnit === "sm" && toUnit === "dm") { 
        result = inputValue / 10;
    } else if (fromUnit === "sm" && toUnit === "sm") { 
        result = inputValue * 1;
    } else if (fromUnit === "sm" && toUnit === "mm") { 
        result = inputValue * 10;
    } else if (fromUnit === "sm" && toUnit === "mkm") { 
            result = inputValue * 10000;
    } else if (fromUnit === "sm" && toUnit === "nm") { 
        result = inputValue * 10000000;

    } else if (fromUnit === "mm" && toUnit === "km") { 
        result = inputValue / 1000000;
    } else if (fromUnit === "mm" && toUnit === "m") { 
        result = inputValue / 1000;
    } else if (fromUnit === "mm" && toUnit === "dm") { 
        result = inputValue / 100;
    } else if (fromUnit === "mm" && toUnit === "sm") { 
        result = inputValue / 10;
    } else if (fromUnit === "mm" && toUnit === "mm") { 
        result = inputValue * 1;
    } else if (fromUnit === "mm" && toUnit === "mkm") { 
            result = inputValue * 1000;
    } else if (fromUnit === "mm" && toUnit === "nm") { 
        result = inputValue * 1000000;

    } else if (fromUnit === "mkm" && toUnit === "km") { 
        result = inputValue / 1000000000;
    } else if (fromUnit === "mkm" && toUnit === "m") { 
        result = inputValue / 1000000;
    } else if (fromUnit === "mkm" && toUnit === "dm") { 
        result = inputValue / 100000;
    } else if (fromUnit === "mkm" && toUnit === "sm") { 
        result = inputValue / 10000;
    } else if (fromUnit === "mkm" && toUnit === "mm") { 
        result = inputValue / 1000;
    } else if (fromUnit === "mkm" && toUnit === "mkm") { 
            result = inputValue * 1;
    } else if (fromUnit === "mkm" && toUnit === "nm") { 
        result = inputValue * 1000;

    } else if (fromUnit === "nm" && toUnit === "km") { 
        result = inputValue / 1000000000000;
    } else if (fromUnit === "nm" && toUnit === "m") { 
        result = inputValue / 1000000000;
    } else if (fromUnit === "nm" && toUnit === "dm") { 
        result = inputValue / 100000000;
    } else if (fromUnit === "nm" && toUnit === "sm") { 
        result = inputValue / 10000000;
    } else if (fromUnit === "nm" && toUnit === "mm") { 
        result = inputValue / 1000000;
    } else if (fromUnit === "nm" && toUnit === "mkm") { 
            result = inputValue / 1000;
    } else if (fromUnit === "nm" && toUnit === "nm") { 
        result = inputValue * 1;
    } 

    // Отображение результата.
    document.getElementById("result").innerHTML =  
        result.toString(); 
} 