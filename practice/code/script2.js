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

    if (fromUnit === "foot" && toUnit === "foot") { 
        result = inputValue * 1;
    } else if (fromUnit === "foot" && toUnit === "yard") { 
        result = inputValue / 3;
    } else if (fromUnit === "foot" && toUnit === "inch") { 
        result = inputValue * 12;
    } else if (fromUnit === "foot" && toUnit === "mile") { 
        result = inputValue / 5280;

    } else if (fromUnit === "yard" && toUnit === "foot") { 
        result = inputValue * 3;
    } else if (fromUnit === "yard" && toUnit === "yard") { 
        result = inputValue * 1;
    } else if (fromUnit === "yard" && toUnit === "inch") { 
        result = inputValue * 36;
    } else if (fromUnit === "yard" && toUnit === "mile") { 
        result = inputValue / 1760;

    } else if (fromUnit === "inch" && toUnit === "foot") { 
        result = inputValue / 12;
    } else if (fromUnit === "inch" && toUnit === "yard") { 
        result = inputValue / 36;
    } else if (fromUnit === "inch" && toUnit === "inch") { 
        result = inputValue * 1;
    } else if (fromUnit === "inch" && toUnit === "mile") { 
        result = inputValue / 63360;

    } else if (fromUnit === "mile" && toUnit === "foot") { 
        result = inputValue * 5280;
    } else if (fromUnit === "mile" && toUnit === "yard") { 
        result = inputValue * 1760;
    } else if (fromUnit === "mile" && toUnit === "inch") { 
        result = inputValue * 63360;
    } else if (fromUnit === "mile" && toUnit === "mile") { 
        result = inputValue * 1;
    }

    // Отображение результата.
    document.getElementById("result").innerHTML =  
        result.toString();
}