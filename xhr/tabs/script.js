'use strict';

const tabs = document.querySelectorAll('a');
const xhr = new XMLHttpRequest();
const preloader = document.querySelector('#preloader');
const content = document.querySelector('#content');

function reqListener() {
    content.innerHTML = this.responseText;
}

xhr.onload = reqListener;
xhr.open("get", tabs[0].href);
xhr.send();

for (let tab of tabs) {
    tab.addEventListener('click', changeTab);
}

function changeTab(event) {
    event.preventDefault();
    for (let i of tabs) {
        i.classList.remove('active');
        event.target.classList.add('active');
    }

    xhr.onload = reqListener;
    xhr.open("get", event.target.href);
    xhr.send();

    preloader.classList.remove('hidden');
}
