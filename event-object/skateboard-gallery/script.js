'use strict';

const picCollection = document.getElementsByTagName('a'),
    picFull = document.getElementsByClassName('gallery-view')[0];

function showPic(i) {
    event.preventDefault();
    for (let index = 0; index < picCollection.length; index++) {
        picCollection[index].classList.remove('gallery-current');
    }
    picCollection[i].classList.add('gallery-current');
    picFull.src = picCollection[i].href;
}

for (let i = 0; i < picCollection.length; i++) {
    picCollection[i].addEventListener('click', function () {
        showPic(i);
    });
}