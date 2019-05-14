'use strict';

const eyes = document.getElementsByClassName('cat_eye');

function rotateEye(eye, event) {
    const eyeParams = eye.getBoundingClientRect();
    const parentParams = eye.parentElement.getBoundingClientRect();
    const angle = Math.atan2((parentParams.bottom + parentParams.top) / 2 - event.pageY, event.pageX - (parentParams.right + parentParams.left) / 2);
    eye.style.left = `${(Math.cos(angle) * (parentParams.width - eyeParams.width) + parentParams.width - eyeParams.width) / 2 + 1}px`;
    eye.style.top = `${(Math.sin(-angle) * (parentParams.height - eyeParams.height) + parentParams.height - eyeParams.height) / 2 + 1}px`;
}

function moveMouseHandle(event) {
    Array.from(eyes).forEach(element => {
        rotateEye(element, event);
    })
}

function throttle(callback, delay) {
    let isWaiting = false;
    return function () {
        if (!isWaiting) {
            callback.apply(this, arguments);
            isWaiting = true;
            setTimeout(() => {
                isWaiting = false;
            }, delay)
        }
    }
}

document.addEventListener('mousemove', throttle(moveMouseHandle, 160));
