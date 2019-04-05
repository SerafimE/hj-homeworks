'use strict';

const clickPiusCollection = document.querySelectorAll('button.add'),
    spanCount = document.querySelector('#cart-count'),
    priseCountDocument = document.querySelector('#cart-total-price');

let totalPriceCount = 0,
    count = 0;

for (let clickPlus of clickPiusCollection) {
    clickPlus.addEventListener('click', function () {
        totalPriceCount += +clickPlus.dataset.price;
        priseCountDocument.textContent = getPriceFormatted(totalPriceCount);
        spanCount.textContent = ++count;
    });
}