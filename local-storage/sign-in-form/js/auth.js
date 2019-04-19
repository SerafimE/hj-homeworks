'use strict';

const signIn = document.querySelector('.sign-in-htm'),
    btns = document.querySelectorAll('.button'),
    message = document.querySelectorAll('.error-message'),
    signUp = document.querySelector('.sign-up-htm');

for (let btn of btns) {
    btn.addEventListener("click", event => {
        event.preventDefault();
        const xhr = new XMLHttpRequest();
        xhr.addEventListener('load', event => {
            if (btn.value === 'Войти') {
                JSON.parse(xhr.response).error === true ? message[0].textContent = JSON.parse(xhr.response).message : message[0].textContent = `Пользователь ${JSON.parse(xhr.response).name} успешно авторизован`;
            } else if (btn.value === 'Зарегистрироваться') {
                JSON.parse(xhr.response).error === true ? message[1].textContent = JSON.parse(xhr.response).message : message[1].textContent = `Пользователь ${JSON.parse(xhr.response).name} успешно зарегистрирован`;
            }
        });
        if (btn.value === 'Войти') {
            xhr.open('POST', 'https://neto-api.herokuapp.com/signin');
            let formData = new FormData(signIn);
            let dataList = {};
            for (let [k, v] of formData) {
                dataList[k] = v;
            }
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify(dataList));
        } else if (btn.value === 'Зарегистрироваться') {
            xhr.open('POST', 'https://neto-api.herokuapp.com/signup');
            let formData = new FormData(signUp);
            let dataList = {};
            for (let [k, v] of formData) {
                dataList[k] = v;
            }
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify(dataList));
        }
    });
}
