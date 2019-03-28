'use strict';

const player = document.getElementsByClassName('audio-player')[0];

const Title = document.getElementsByClassName('title')[0];

const src = [
    "LA Chill Tour",
    "LA Fusion Jam",
    "This is it band"
];

let i = 0;
player.src = 'mp3/' + src[i] + '.mp3';

const mediaPlayer = document.getElementsByClassName('mediaplayer')[0];

document.getElementsByClassName('fa-play')[0].onclick = () => {
    player.play();
    mediaPlayer.classList.toggle('play');
};

document.getElementsByClassName('fa-pause')[0].onclick = () => {
    player.pause();
    mediaPlayer.classList.toggle('play');
};

document.getElementsByClassName('fa-stop')[0].onclick = () => {
    player.pause();
    player.currentTime = 0;
    mediaPlayer.classList.remove('play');
};

document.getElementsByClassName('back')[0].onclick = () => {
    mediaPlayer.classList.remove('play');
    i === 0 ? i = src.length - 1 : i--;
    player.src = 'mp3/' + src[i] + '.mp3';
    player.play();
    mediaPlayer.classList.toggle('play');
    Title.setAttribute('title', src[i]);
};

document.getElementsByClassName('next')[0].onclick = () => {
    mediaPlayer.classList.remove('play');
    i === src.length - 1 ? i = 0 : i++;
    player.src = 'mp3/' + src[i] + '.mp3';
    player.play();
    mediaPlayer.classList.toggle('play');
    Title.setAttribute('title', src[i]);
};