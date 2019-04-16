'use strict';

const tabs = document.querySelectorAll('a');
const xhr = new XMLHttpRequest();
const preloader = document.querySelector('#preloader');
const content = document.querySelector('#content');

function reqListener() {
    content.innerHTML = this.responseText;
}

for (let tab of tabs) {
    tab.addEventListener('click', changeTab);
}

tabs[0].click();

function changeTab() {
    event.preventDefault();
    for (let tab of tabs) {
        tab.classList.remove('active');
        event.target.classList.add('active');
    }

    xhr.onload = reqListener;
    xhr.open("get", event.target.href);
    xhr.send();

    preloader.classList.remove('hidden');
}
