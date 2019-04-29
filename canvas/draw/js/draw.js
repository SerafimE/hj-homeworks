'use strict';

const canvas = document.querySelector('#draw'),
    ctx = canvas.getContext('2d');

let widthLine = 100,
    tint = 0,
    points = [],
    isDraw = false,
    widthIncrease,
    myX,
    myY;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', event => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    widthLine = 100;
    tint = 0;
    isDraw = false;
});

canvas.addEventListener('dblclick', event => {
    canvas.width = window.innerWidth;
    widthLine = 100;
    tint = 0;
    isDraw = false;
});

canvas.addEventListener('mouseleave', event => isDraw = false);
canvas.addEventListener('mousedown', event => isDraw = true);
canvas.addEventListener('mousemove', event => {
    if ((event.buttons & 1) === 1) {
        draw(event);
    }
});


function draw(event) {
    if (isDraw) {
        ctx.beginPath();

        if (event.shiftKey && tint !== 0) {
            tint--;
        } else if (!event.shiftKey && tint !== 359) {
            tint++;
        }
        if (widthLine === 5) widthIncrease = true;
        if (widthLine === 100) widthIncrease = false;
        widthIncrease ? widthLine++ : widthLine--;

        ctx.lineWidth = widthLine;
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.moveTo(event.x, event.y);
        ctx.lineTo(myX, myY);
        ctx.strokeStyle = `hsl(${tint}, 100%, 50%)`;
        ctx.stroke();
    } else {
        return false;
    }
}

canvas.onmousemove = event => {
    myX = event.offsetX;
    myY = event.offsetY;
};
