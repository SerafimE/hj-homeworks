'use strict';

const ul = document.querySelector('#content');
const li = document.querySelector('#content li');
li.parentNode.removeChild(li);

const xhr = new XMLHttpRequest();
xhr.addEventListener('load', onLoad);
xhr.open('GET', 'https://neto-api.herokuapp.com/book/');
xhr.send();

const result = [];

function onLoad() {

    let data = JSON.parse(xhr.responseText);
    for (let k in data) {
        let v = data[k];
        result.push(v);
    }

    for (let i = 0; i < result.length; i++) {

        const li = document.createElement('li');

        li.dataset.title = result[i].title;
        li.dataset.author = result[i].author.name;
        li.dataset.info = result[i].info;
        li.dataset.price = result[i].price;
        ul.append(li);
        li.appendChild((document.createElement('img'))).src = result[i].cover.small;
    }
}
