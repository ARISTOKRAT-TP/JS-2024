export const getFull = (codes, code) => { //Получение полного имени валюты
    const [, title] = codes.find((item)=>item.includes(code));
    return title;
}