import { data } from './data.js';

const listLength = data.length - 1;

const randomListItem = Math.floor(Math.random()*listLength)
const language = data[randomListItem].language;
const symbol = data[randomListItem].symbol;
const translation = data[randomListItem].translation;

document.getElementById('translation').lang = symbol;

const splitArray = (x) => {return x.split('')};

const translationArray = splitArray(translation);
const languageArray = splitArray(language);


const loopThroughEachLetterTranslation = () => {
    for (let i = 0; i < translationArray.length; i++) {
        setTimeout(() => {
            document.getElementById('translation').innerHTML += translationArray[i];
        }, 500*i)
    };
}

const loopThroughEachLetterLanguage = () => {
    for (let i = 0; i < languageArray.length; i++) {
        setTimeout(() => {
            document.getElementById('language').innerHTML += languageArray[i];
        }, 375*i)
    };
}

loopThroughEachLetterTranslation();
loopThroughEachLetterLanguage();

window.setInterval(() => {
    window.location.reload();
}, 30000);