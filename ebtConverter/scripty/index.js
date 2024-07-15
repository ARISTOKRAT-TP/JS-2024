import variables from "./variables.js";
import url from "./state.js";
import { handleChange } from "./convert.js";
import state from "./state.js";

const {selects, success} = variables;



const rendSel = () => {
    selects.forEach((select) => {
        url.codes.forEach(([code]) => {
            const element = document.createElement('option');
            element.value = code;
            element.innerText = code;
            select.insertAdjacentElement("beforeend", element);
        });
        select.addEventListener('change', handleChange);
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
