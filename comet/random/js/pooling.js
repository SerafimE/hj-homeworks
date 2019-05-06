'use strict';

const pooling = document.querySelectorAll('.pooling div');

const request = new XMLHttpRequest();

function poolingRequest() {
    request.open('GET', 'https://neto-api.herokuapp.com/comet/pooling', true);
    request.addEventListener('load', () => {
        if (request.status === 200) {
            pooling.forEach(elem => elem.classList.remove('flip-it'));
            pooling[request.responseText - 1].classList.add('flip-it');
        }
    });
    request.send();
}

setInterval(poolingRequest, 5000);
