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

    if (fromUnit === "sazhen" && toUnit === "sazhen") { 
        result = inputValue * 1;
    } else if (fromUnit === "sazhen" && toUnit === "pyad") { 
        result = inputValue * 12;
    } else if (fromUnit === "sazhen" && toUnit === "arshin") { 
        result = inputValue * 3;
    } else if (fromUnit === "sazhen" && toUnit === "vershok") { 
        result = inputValue * 48;

    } else if (fromUnit === "pyad" && toUnit === "sazhen") { 
        result = inputValue / 12;
    } else if (fromUnit === "pyad" && toUnit === "pyad") { 
        result = inputValue * 1;
    } else if (fromUnit === "pyad" && toUnit === "arshin") { 
        result = inputValue / 4;
    } else if (fromUnit === "pyad" && toUnit === "vershok") { 
        result = inputValue * 4;

    } else if (fromUnit === "arshin" && toUnit === "sazhen") { 
        result = inputValue / 3;
    } else if (fromUnit === "arshin" && toUnit === "pyad") { 
        result = inputValue * 4;
    } else if (fromUnit === "arshin" && toUnit === "arshin") { 
        result = inputValue * 1;
    } else if (fromUnit === "arshin" && toUnit === "vershok") { 
        result = inputValue * 16;

    } else if (fromUnit === "vershok" && toUnit === "sazhen") { 
        result = inputValue / 48;
    } else if (fromUnit === "vershok" && toUnit === "pyad") { 
        result = inputValue / 4;
    } else if (fromUnit === "vershok" && toUnit === "arshin") { 
        result = inputValue / 16;
    } else if (fromUnit === "vershok" && toUnit === "vershok") { 
        result = inputValue * 1;
    }
    // Отображение результата.
    document.getElementById("result").innerHTML =  
        result.toString(); 
}