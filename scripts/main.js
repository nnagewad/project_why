import { data } from './data.js';

setInterval(printOnPage, 10000);

function printOnPage() {
    const randomSelector = Math.floor(Math.random()*data.length);

    document.getElementById('translation').lang = data[randomSelector].symbol;
    document.getElementById('translation').innerHTML = data[randomSelector].translation;
    document.getElementById('language').innerHTML = data[randomSelector].language;
}