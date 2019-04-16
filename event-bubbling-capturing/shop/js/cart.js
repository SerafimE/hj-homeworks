'use strict';

const listItem = document.querySelector('.items-list');

listItem.addEventListener('click', event => {
    event.preventDefault();
    const item = {
        title: event.target.dataset.title,
        price: event.target.dataset.price
    };
    if (event.target.className === 'add-to-cart') {
        addToCart(item);
    }
});
