'use strict';

(function () {

    const img = document.getElementById('slider');
    const src = [
        'i/airmax-jump.png',
        'i/airmax-on-foot.png',
        'i/airmax-playground.png',
        'i/airmax-top-view.png',
        'i/airmax.png'
    ];

    let i = 0;

    img.src = src[i];

    setInterval(() => {
        img.src = src[i];
        i = i >= src.length - 1 ? 0 : ++i;
    }, 5000);

})();