import { fetchCodes } from "./index.js";
import { handleInp, handleSub } from "./convert.js";
import variables from "./variables.js";

const {amountInp, form} = variables;

fetchCodes();
amountInp.addEventListener('keyup', handleInp);
form.addEventListener("submit", handleSub);