'use strict';

const inputCollection = document.querySelectorAll('input, textarea');
const form = document.querySelector('.contentform');
const message = document.querySelector('#output');
const buttonSend = document.querySelectorAll('.button-contact')[0];
const buttonCheck = document.querySelectorAll('.button-contact')[1];
let count = 0;

for (let t of inputCollection) {
    if (t.name === 'zip') {
        t.addEventListener('input', event => {
            t.value = t.value.replace(/\D/, '');
        });
    }

    t.addEventListener('input', event => {
        if (t.value === '') {
            buttonSend.disabled = true;
            --count;
        }
    });
    t.addEventListener('change', event => {
        if (t.value !== '') {
            ++count;
        }
        if (count === inputCollection.length) {
            buttonSend.disabled = false;
            buttonSend.type = 'button';
        }
    });
}

buttonSend.addEventListener('click', event => {
    form.classList.add('hidden');
    message.classList.remove('hidden');
});

buttonCheck.addEventListener('click', event => {
    form.classList.remove('hidden');
    message.classList.add('hidden');
});
