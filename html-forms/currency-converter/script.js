'use strict';

const selectFrom = document.querySelector('#from');
const selectTo = document.querySelector('#to');
const amountOfMoney = document.querySelector('#source');

const xhr = new XMLHttpRequest();
xhr.onload = onLoad;
xhr.open('get', 'https://neto-api.herokuapp.com/currency');
xhr.send();

xhr.addEventListener("loadend", onLoadEnd);
document.querySelector('#loader').classList.remove('hidden');

function calculation() {
    document.querySelector('#result').value = (selectFrom.value / selectTo.value * amountOfMoney.value).toFixed(2);
}

selectFrom.addEventListener('change', calculation);
selectTo.addEventListener('change', calculation);
amountOfMoney.addEventListener('input', calculation);

function onLoadEnd() {
    document.querySelector('#loader').classList.add('hidden');
    document.querySelector('#content').classList.remove('hidden');
}

function onLoad() {
    createOption(selectFrom);
    createOption(selectTo);
    calculation();
}

function createOption(parent) {
    const arrMoney = JSON.parse(xhr.responseText);
    for (let i of arrMoney) {
        const option = document.createElement('option');
        option.setAttribute('name', i.code);
        option.setAttribute('title', i.title);
        option.setAttribute('value', i.value);
        option.textContent = i.code;
        parent.appendChild(option);
    }
}
