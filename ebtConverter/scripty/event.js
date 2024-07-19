import { fetchCodes } from "./index.js";
import { handleInp, handleSub, switchCurrencies } from "./convert.js";
import variables from "./variables.js";

const {amountInp, form, switchButton} = variables;

fetchCodes();
amountInp.addEventListener('keyup', handleInp);
form.addEventListener("submit", handleSub);
switchButton.addEventListener('click', switchCurrencies); //Добавление листенеров для отслеживания действий пользователя