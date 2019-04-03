'use strict';

const player = document.getElementsByClassName('audio-player')[0];
const Title = document.getElementsByClassName('title')[0];
const src = [
    'LA Chill Tour',
    'LA Fusion Jam',
    'This is it band'
];
let i = 0;
player.src = 'mp3/' + src[i] + '.mp3';
const mediaPlayer = document.getElementsByClassName('mediaplayer')[0];

function switchSongs() {
    player.src = 'mp3/' + src[i] + '.mp3';
    Title.setAttribute('title', src[i]);
    if (document.getElementsByClassName('play')[0]) {
        player.play();
    } else {
        player.pause();
    }
}

document.getElementsByClassName('back')[0].onclick = () => {
    i === 0 ? i = src.length - 1 : i--;
    switchSongs();
};

document.getElementsByClassName('playstate')[0].onclick = () => {
    if (document.getElementsByClassName('play')[0]) {
        player.pause();
    } else {
        player.play();
    }
    mediaPlayer.classList.toggle('play');
};

document.getElementsByClassName('stop')[0].onclick = () => {
    player.pause();
    player.currentTime = 0;
    mediaPlayer.classList.remove('play');
};

document.getElementsByClassName('next')[0].onclick = () => {
    i === src.length - 1 ? i = 0 : i++;
    switchSongs();
};
