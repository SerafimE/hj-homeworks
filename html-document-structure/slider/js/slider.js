'use strict';

const sliderNav = document.querySelectorAll('.slider-nav > a');
const [prev, next, first, last] = Array.from(sliderNav);

const slides = document.querySelector('.slides');
slides.firstElementChild.classList.add('slide-current');

first.addEventListener('click', event => moveSlide());
first.classList.add('disabled');

prev.addEventListener('click', event => moveSlide());
prev.classList.add('disabled');

next.addEventListener('click', event => moveSlide());

last.addEventListener('click', event => moveSlide());

function moveSlide() {
    const currentSlide = document.querySelector('.slide-current');

    if (event.currentTarget.className === 'disabled') {
        return;
    }
    let slideNext;
    switch (event.currentTarget.dataset.action) {
        case 'prev':
            slideNext = currentSlide.previousElementSibling;
            break;
        case 'next':
            slideNext = currentSlide.nextElementSibling;
            break;
        case 'first':
            slideNext = currentSlide.parentElement.firstElementChild;
            break;
        case 'last':
            slideNext = currentSlide.parentElement.lastElementChild;
            break;
    }
    currentSlide.classList.remove('slide-current');
    slideNext.classList.add('slide-current');

    if (!slideNext.nextElementSibling) {
        next.classList.add('disabled');
        last.classList.add('disabled');
    } else {
        next.classList.remove('disabled');
        last.classList.remove('disabled');
    }
    if (!slideNext.previousElementSibling) {
        prev.classList.add('disabled');
        first.classList.add('disabled');
    } else {
        prev.classList.remove('disabled');
        first.classList.remove('disabled');
    }
}