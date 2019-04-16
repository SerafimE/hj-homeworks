'use strict';

function toggleMenu(event) {
    if (event.currentTarget.classList.contains('show')) {
        event.currentTarget.classList.remove('show');
        event.currentTarget.classList.add('hide');
    } else {
        event.currentTarget.classList.add('show');
        event.currentTarget.classList.remove('hide');
    }
}

function openLink(event) {
    console.log(event.target.textContent);
    event.preventDefault();
    event.stopPropagation();
}

function init(node) {
    node.addEventListener('click', toggleMenu);
}

function initLink(node) {
    if (node.dataset.toggle) {
        return;
    }
    node.addEventListener('click', openLink);
}

Array
    .from(document.querySelectorAll('.dropdown'))
    .forEach(init);

Array
    .from(document.querySelectorAll('a'))
    .forEach(initLink);
