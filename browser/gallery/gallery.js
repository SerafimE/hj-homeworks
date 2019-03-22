'use strict';

const img = document.getElementById("currentPhoto");
const nextBut = document.getElementById("nextPhoto");
const prevBut = document.getElementById("prevPhoto");

const src = [
    "i/breuer-building.jpg",
    "i/guggenheim-museum.jpg",
    "i/headquarters.jpg",
    "i/IAC.jpg",
    "i/new-museum.jpg"
];

let i = 0;
img.src = src[i];

function galleryPrev() {
    i === 0 ? i = src.length - 1 : i--;
    img.src = src[i];
}

function galleryNext() {
    i === src.length - 1 ? i = 0 : i++;
    img.src = src[i];
}

prevBut.onclick = galleryPrev;
nextBut.onclick = galleryNext;