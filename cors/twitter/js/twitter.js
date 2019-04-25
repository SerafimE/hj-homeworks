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

function showProfile(profile) {
    document.querySelector('[data-wallpaper]').src = profile.wallpaper;
    document.querySelector('[data-pic]').src = profile.pic;
    document.querySelector('[data-username]').textContent = profile.username;
    document.querySelector('[data-description]').textContent = profile.description;
    document.querySelector('[data-tweets]').textContent = profile.tweets;
    document.querySelector('[data-followers]').textContent = profile.followers;
    document.querySelector('[data-following]').textContent = profile.following;
}

loadData('https://neto-api.herokuapp.com/twitter/jsonp')
    .then(showProfile)
    .catch(error => console.log(error));
