'use strict';

const dd = document.getElementsByClassName('wrapper-dropdown')[0];

dd.onclick = () => {
    dd.classList.toggle('active');
};