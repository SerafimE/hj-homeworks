'use strict';

const labels = document.querySelectorAll('label');
const inputs = document.querySelectorAll('input');
const done = document.querySelector('.done');
const undone = document.querySelector('.undone');

for (let i = 0; i < inputs.length; i++) {
    labels[i].addEventListener('click', event => event.target.checked ? done.appendChild(event.currentTarget) : undone.appendChild(event.currentTarget));
}
