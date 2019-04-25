'use strict';

function loadData(url) {
    const functionName = 'functionName' + (Math.random() * 1000).toFixed();
    return new Promise((done, fail) => {
        window[functionName] = done;
        const script = document.createElement('script');
        script.src = `${url}?jsonp=${functionName}`;
        document.body.appendChild(script);
    });
}

function showProfile(receipt) {
    const div = document.querySelector('[data-pic]');
    div.style.backgroundImage = `url(${receipt.pic})`;
    document.querySelector('[data-title]').textContent = receipt.title;
    document.querySelector('[data-ingredients]').textContent = receipt.ingredients;

    function showRating(rat) {
        document.querySelector('[data-rating]').textContent = rat.rating.toFixed(2);
        document.querySelector('[data-votes]').textContent = `${rat.votes} оценок`;
    }

    function users(users) {
        const consumers = document.querySelector('[data-consumers]');
        for (let i = 0; i < users.consumers.length; i++) {
            const img = document.createElement('img');
            img.src = users.consumers[i].pic;
            img.title = users.consumers[i].name;
            consumers.appendChild(img);
        }
    const span = document.createElement('span');
        span.innerText = `(+${users.total})`;
        consumers.appendChild(span);
    }

    loadData('https://neto-api.herokuapp.com/food/42/rating')
        .then(showRating)
        .catch(error => console.log(error));

    loadData('https://neto-api.herokuapp.com/food/42/consumers')
        .then(users)
        .catch(error => console.log(error));
}

loadData('https://neto-api.herokuapp.com/food/42')
    .then(showProfile)
    .catch(error => console.log(error));
