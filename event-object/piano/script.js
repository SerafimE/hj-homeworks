'use strict';

const piano = document.getElementsByTagName('ul')[0],
    keyPiano = document.getElementsByTagName('li'),
    soundPiano = document.getElementsByTagName('audio'),
    sounds = [
        'first.mp3',
        'second.mp3',
        'third.mp3',
        'fourth.mp3',
        'fifth.mp3'
    ];

document.addEventListener('keypress', function () {
    playSound();
});

document.addEventListener('keyup', function () {
    piano.classList.remove('higher', 'lower');
    piano.classList.add('middle');
});

function playSound(i) {

    if (event.altKey) {
        piano.classList.remove('middle', 'lower');
        piano.classList.add('higher');
        soundPiano[i].src = 'sounds/higher/' + sounds[i];
    } else if (event.shiftKey) {
        piano.classList.remove('middle', 'higher');
        piano.classList.add('lower');
        soundPiano[i].src = 'sounds/lower/' + sounds[i];
    } else {
        piano.classList.remove('higher', 'lower');
        piano.classList.add('middle');
        soundPiano[i].src = 'sounds/middle/' + sounds[i];
    }
    soundPiano[i].play();
}

for (let i = 0; i < keyPiano.length; i++) {
    keyPiano[i].addEventListener('click', function () {
        playSound(i);
    });
}