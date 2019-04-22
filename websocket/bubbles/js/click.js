'use strict';

let coords = {};

const connection = new WebSocket('wss://neto-api.herokuapp.com/mouse');

const click = window.addEventListener('click', event => {

    coords = {
        x: event.pageX,
        y: event.pageY
    };
    connection.send(JSON.stringify(coords));
});
connection.addEventListener('open', () => {
    console.log('Вебсокет-соединение открыто');
});

connection.addEventListener('message', event => {
    console.log(`Получено сообщение: ${event.data}`);
});

showBubbles(connection);
