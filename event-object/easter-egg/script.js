'use strict';

const navClass = document.getElementsByTagName('nav')[0],
    secret = document.getElementsByClassName('secret')[0];

document.addEventListener('keydown', showSecret);

let str = '';

function showSecret() {

    if (event.ctrlKey && event.altKey && event.code === 'KeyT') {
        event.preventDefault();
        navClass.classList.toggle('visible');
    }

    str = str + event.code;
    const strCheck = 'KeyYKeyTKeyNKeyJKeyKKeyJKeyUKeyBKeyZ';
    if (str === strCheck) {
        secret.classList.add('visible');
    } else if (strCheck.indexOf(str)) {
        str = '';
    }
}
