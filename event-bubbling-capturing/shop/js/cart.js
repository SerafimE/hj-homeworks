'use strict';

const listItem = document.querySelector('.items-list');

listItem.addEventListener('click', event => {
    event.preventDefault();

    if (event.target.className === 'add-to-cart') {
        const item = {
            title: event.target.dataset.title,
            price: event.target.dataset.price
        };
        addToCart(item);
    }
});
