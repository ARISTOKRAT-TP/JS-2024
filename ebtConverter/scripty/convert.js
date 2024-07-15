import { renderRes } from "./markups.js";
import state from "./state.js";
import url from "./state.js";
import { getFull } from "./utils.js";
import variables from "./variables.js";

const {success, formResults } = variables;


export const handleChange = ({target: {value,name}}) => {
    state.pair = {
        ...state.pair,
        [name]: value,
    };
};

export const handleInp =  ({target: {value, name}}) => {
    state[name] = Number(value);
};

const Insertres = ({base_code: baseCode, target_code: targetCode, conversion_rate: rate,
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
resultFrom.innerHTML = renderRes(from);
resultTo.innerHTML = renderRes(to);

formResults.classList.add('show');


};

export const handleSub = async (e) => {
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