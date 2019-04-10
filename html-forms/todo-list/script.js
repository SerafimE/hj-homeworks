'use strict';

const check = document.querySelectorAll('input');
const counter = document.querySelector('output');
let count = 0;
const total = check.length;
counter.value = `${count} из ${total}`;

for (let i of check) {
    i.checked = false;
    i.addEventListener('change', checkChecked);
}

function checkChecked(event) {
    if (event.target.checked === true) {
        counter.value = `${++count} из ${total}`;
    } else if (event.target.checked === false) {
        counter.value = `${--count} из ${total}`;
    }
}
