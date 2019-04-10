'use strict';

const inputCollection = document.querySelectorAll('input');
const form = document.querySelector('.contentform');
const message = document.querySelector('#output');
const buttonSend = document.querySelectorAll('.button-contact')[0];
const buttonCheck = document.querySelectorAll('.button-contact')[1];
const textArea = document.querySelector('textarea');
let count = 0;

for (let t of inputCollection) {
    if (t.name === 'zip') {
        t.type = 'number';
    }

    t.addEventListener('change', function () {
        if (t.value !== '') {
            ++count;
            document.getElementById(t.name).value = t.value;
        }

        textArea.addEventListener('change', function () {
            document.getElementById(textArea.name).value = textArea.value;
        });

        if (count === inputCollection.length) {
            buttonSend.disabled = false;
            buttonSend.type = 'button';
        }
    });
}

buttonSend.addEventListener('click', function () {
    form.classList.add('hidden');
    message.classList.remove('hidden');
});

buttonCheck.addEventListener('click', function () {
    form.classList.remove('hidden');
    message.classList.add('hidden');
});
