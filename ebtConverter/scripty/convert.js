import { renderRes } from "./markups.js";
import state from "./state.js";
import url from "./state.js";
import { getFull } from "./utils.js";
import variables from "./variables.js";

const {success, formResults, toSelect, fromSelect } = variables;


export const handleChange = ({target: {value,name}}) => { //Выбор валют
    state.pair = {
        ...state.pair,
        [name]: value,
    };
};

export const handleInp =  ({target: {value, name}}) => { //Ввод кол-ва валюты
    state[name] = Number(value);
};

const Insertres = ({base_code: baseCode, target_code: targetCode, conversion_rate: rate, //Вывод результата
    conversion_result: result, time_last_update_utc: time,
 }) => {
const from = {
    code: baseCode,
    amount: state.amount,
    full: getFull(state.codes, baseCode)
}

const to = {
    code: targetCode,
    amount: result,
    full: getFull(state.codes, targetCode)
}
resultFrom.innerHTML = renderRes(from); //Вывод на сайт из какой валюты конвертируем (результат)
resultTo.innerHTML = renderRes(to); //Вывод на сайт в какую валюту конвертируем (результат)

formResults.classList.add('show');


};

export const handleSub = async (e) => { //Конвертация
    e?.preventDefault();

    const {url, amount, pair: {from, to} } = state;

    state.loading = true;

    if(!amount || !from || !to) return;

    try{
        const resp = await fetch(`${url}/pair/${from}/${to}/${amount}`);
        const data = await resp.json();

        if(data.result === success) Insertres(data);

        state.loading = false;
    }catch(err){
        console.log(err)
    }
}

export const switchCurrencies = () => { //Смена валют на кнопку
    const {
      pair: { to, from },
    } = state;
  
    if (!to || !from) return;
  
    state.pair = {
      to: from,
      from: to,
    };
  
    toSelect.value = from;
    fromSelect.value = to;
  };