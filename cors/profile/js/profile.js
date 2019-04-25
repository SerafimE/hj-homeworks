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
    document.querySelector('[data-name]').textContent = profile.name;
    document.querySelector('[data-description]').textContent = profile.description;
    document.querySelector('[data-pic]').src = profile.pic;
    document.querySelector('[data-position]').textContent = profile.position;
    document.querySelector('.content').style.display = 'initial';

    function showTechnologies(tech) {
        const technologies = document.querySelector('[data-technologies]');
        for (let i = 0; i < tech.length; i++) {
            const span = document.createElement('span');
            span.classList.add('devicons', `devicons-${tech[i]}`);
            technologies.appendChild(span);
        }
    }

    loadData(`https://neto-api.herokuapp.com/profile/${profile.id}/technologies`)
        .then(showTechnologies)
        .catch(error => console.log(error));
}

loadData('https://neto-api.herokuapp.com/profile/me')
    .then(showProfile)
    .catch(error => console.log(error));
