import variables from "./variables.js";
import url from "./state.js";
import { handleChange } from "./convert.js";
import state from "./state.js";

const {selects, success} = variables;



const rendSel = () => {  //Скрипт для рендера кодов из API
    selects.forEach((select) => {
        url.codes.forEach(([code]) => {
            const element = document.createElement('option');
            element.value = code;
            element.innerText = code;
            select.insertAdjacentElement("beforeend", element); //Введенная валюта
        });
        select.addEventListener('change', handleChange); //Сама конвертация
    });
};
export const fetchCodes = async() =>{
    try {
const resp = await fetch(`${state.url}/codes`);
const data = await resp.json();
if(data.result === success){
    state.codes = data.supported_codes

    rendSel();
}
    }catch(err) {
        console.log(err)
    }
};
