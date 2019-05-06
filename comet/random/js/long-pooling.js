'use strict';

const lpooling = document.querySelectorAll('.long-pooling div');

const lrequest = new XMLHttpRequest();

function lpoolingRequest() {
    lrequest.open('GET', 'https://neto-api.herokuapp.com/comet/long-pooling', true);
    lrequest.addEventListener('load', () => {
        if (lrequest.responseText) {
            lpooling.forEach(elem => elem.classList.remove('flip-it'));
            lpooling[lrequest.responseText - 1].classList.add('flip-it');
            lpoolingRequest();
        }
    });
    lrequest.send();
}

lpoolingRequest();
