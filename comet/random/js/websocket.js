'use strict';

const websocket = document.querySelectorAll('.websocket div');

const connection = new WebSocket('wss://neto-api.herokuapp.com/comet/websocket');

connection.addEventListener('message', event => {
    websocket.forEach(elem => elem.classList.remove('flip-it'));
    websocket[event.data - 1].classList.add('flip-it');
});

window.addEventListener('beforeunload', () => connection.close());
