'use strict';

const increment = document.querySelector('#increment'),
    decrement = document.querySelector('#decrement'),
    reset = document.querySelector('#reset'),
    counter = document.querySelector('#counter');
let localStorageCounter = localStorage.getItem('counter');
counter.textContent = localStorageCounter;

increment.addEventListener('click', event => count());
decrement.addEventListener('click', event => count());
reset.addEventListener('click', event => count());

function count() {
    if (event.target === increment) {
        ++localStorageCounter;
    } else if (event.target === decrement) {
        --localStorageCounter;
    } else if (event.target === reset) {
        localStorageCounter = 0;
    }
    counter.textContent = localStorageCounter;
    localStorage.setItem('counter', localStorageCounter);
}
