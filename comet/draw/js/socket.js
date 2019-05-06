'use strict';

const connection = new WebSocket('wss://neto-api.herokuapp.com/draw');
window.editor.addEventListener('update', () => {
    canvas.toBlob(pic => connection.send(pic));
});
