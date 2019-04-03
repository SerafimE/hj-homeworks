'use strict';

const navClass = document.getElementsByTagName('nav')[0],
    secret = document.getElementsByClassName('secret')[0];

function addRemoveClass() {
    if (event.ctrlKey && event.altKey && event.code === 'KeyT') {
        if (navClass.className !== 'visible') {
            navClass.classList.add('visible');
        } else {
            navClass.classList.remove('visible');
        }
    }
}

document.addEventListener('keydown', addRemoveClass);

document.addEventListener('keydown', showSecret);

let str = '';

function showSecret() {
    if (event.ctrlKey === false && event.altKey === false) {
        str = str + event.code;
    }

    if (str === 'KeyYKeyTKeyNKeyJKeyKKeyJKeyUKeyBKeyZ') {
        secret.classList.add('visible');
        str = '';
    } else if (str.length >= 36 && str !== 'KeyYKeyTKeyNKeyJKeyKKeyJKeyUKeyBKeyZ') {
        alert('Допущена ошибка! Начни ввод сначала.');
        str = '';
    }
}
