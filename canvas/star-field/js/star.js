'use strict';

const canvas = document.querySelector('canvas'),
    ctx = canvas.getContext("2d"),
    minSizeOfStars = 0,
    maxSizeOfStars = 1.1,
    minNumberOfStars = 200,
    maxNumberOfStars = 400,
    minCoordinate = 0,
    maxCoordinateX = 800,
    maxCoordinateY = 400,
    minStarGlobalAlpha = 0.8,
    maxStarGlobalAlpha = 1,
    colors = ['#ffffff', '#ffe9c4', '#d4fbff'];

const numberOfStars = Math.round(minNumberOfStars + Math.random() * (maxNumberOfStars - minNumberOfStars));

function paintStars() {
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, maxCoordinateX, maxCoordinateY);
    for (let i = 0; i < numberOfStars; i++) {
        const sizeOfStars = (minSizeOfStars + Math.random() * (maxSizeOfStars - minSizeOfStars)),
            x = Math.round(minCoordinate + Math.random() * (maxCoordinateX - minCoordinate)),
            y = Math.round(minCoordinate + Math.random() * (maxCoordinateY - minCoordinate)),
            starGlobalAlpha = Math.round(minStarGlobalAlpha + Math.random() * (maxStarGlobalAlpha - minStarGlobalAlpha)),
            color = colors[Math.round(Math.random() * (colors.length))];

        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.globalAlpha = starGlobalAlpha;
        ctx.moveTo(x, y);
        ctx.arc(x, y, sizeOfStars, 0, 2 * Math.PI);
        ctx.fill();
    }
}

window.addEventListener('load', event => {
    paintStars();
});

canvas.addEventListener('click', event => {
    ctx.clearRect(0, 0, maxCoordinateX, maxCoordinateY);
    paintStars();
});