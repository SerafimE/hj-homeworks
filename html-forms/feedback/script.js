'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contentform');
    const output = document.querySelector('#output');
    const sendBtn = form.querySelector('.button-contact');
    const editBtn = output.querySelector('.button-contact');
    const inputList = Array.from(form.querySelectorAll('input'));
    inputList.push(form.querySelector('textarea'));

    sendBtn.addEventListener('click', toggleBtns);
    editBtn.addEventListener('click', toggleBtns);

    for (const input of inputList) {
        input.addEventListener('input', checkField);
        input.addEventListener('change', checkForm);
    }

    function checkForm() {
        for (const item of inputList) {
            if (!item.value) {
                sendBtn.setAttribute('disabled', true);
                return;
            }
            sendBtn.removeAttribute('disabled', true);
        }
    }

    function checkField() {
        if (this.name === 'zip') {
            this.value = this.value.replace(/\D/, '');
        }
        document.getElementById(this.name).value = this.value;
    }

    function toggleBtns(event) {
        event.preventDefault();
        form.classList.toggle('hidden');
        output.classList.toggle('hidden');
    }

});
