'use strict';

const eyesBlock = document.getElementsByClassName('block')[0],
    message = document.getElementsByClassName('message')[0],
    textArea = document.getElementsByClassName('textarea')[0];
let eyeTimeout = null;

function blurHandle(event) {
    eyesBlock.classList.remove('active');
    message.classList.remove('view');
    clearTimeout(eyeTimeout);
}

function focusHandle(event) {
    eyesBlock.classList.add('active');
    message.classList.remove('view');
}

function stopPrintHandle(event) {
    eyesBlock.classList.remove('active');
    message.classList.add('view');
}

function debounce(callback, delay) {
    return (event) => {
        focusHandle(event);
        clearTimeout(eyeTimeout);
        eyeTimeout = setTimeout(function () {
            eyeTimeout = null;
            callback(event);
        }, delay)
    }
}

textArea.addEventListener('focus', focusHandle);
textArea.addEventListener('blur', blurHandle);
textArea.addEventListener('input', debounce(stopPrintHandle, 2000));