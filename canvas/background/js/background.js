'use strict';

const canvas = document.getElementById('wall');//получил канвас
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#ffffff';
const curves = [];

function getCircle(x, y, size) {
    ctx.beginPath();
    ctx.lineWidth = 5 * size;
    ctx.arc(x, y, size * 12, 0, 2 * Math.PI);
    ctx.stroke();
}

function getCross(x, y, size, angle) {
    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = 5 * size;
    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.translate(-x, -y);
    ctx.moveTo(x, y - size * 20);
    ctx.lineTo(x, y + size * 20);
    ctx.moveTo(x - size * 20, y);
    ctx.lineTo(x + size * 20, y);
    ctx.stroke();
    ctx.restore();
}

function randomValue(min, max) {
    return Math.random() * (max - min) + min;
}

function getTimeFunction() {
    const choose = Math.floor(randomValue(0, 2));
    switch (choose) {
        case 0:
            return function nextPoint(x, y, time) {
                return {
                    x: x + Math.sin((50 + x + (time / 10)) / 100) * 3,
                    y: y + Math.sin((45 + x + (time / 10)) / 100) * 4
                };
            };
        case 1:
            return function nextPoint(x, y, time) {
                return {
                    x: x + Math.sin((x + (time / 10)) / 100) * 5,
                    y: y + Math.sin((10 + x + (time / 10)) / 100) * 2
                };
            }
    }
}

function createObjects() {
    const num = Math.floor(randomValue(50, 200));
    for (let i = 0; i < num; i++) {
        const object = {};
        object.size = randomValue(0.1, 0.6);
        object.x = Math.floor(randomValue(0, canvas.width + 1));
        object.y = Math.floor(randomValue(0, canvas.height + 1));
        object.nextPoint = getTimeFunction();
        if (i % 2) {
            object.create = getCross;
            object.velocity = Math.floor(randomValue(-200, 201)) / 1000;
            object.angle = Math.floor(randomValue(0, 360));
        } else {
            object.create = getCircle;
            object.angle = 0;
        }
        curves.push(object);
    }
}

createObjects();

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    curves.forEach(object => {
        const nextPoint = object.nextPoint(object.x, object.y, Date.now());
        object.create(nextPoint.x, nextPoint.y, object.size, object.angle += object.velocity);
    });
}

function tick(timestamp) {
    if (!(Math.floor(timestamp) % 3)) {
        animate();
    }
    requestAnimationFrame(tick);
}

tick();
