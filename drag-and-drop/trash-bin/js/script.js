'use strict';
const z = console.log;

let movedLogo = null;

document.addEventListener('mousedown', event => {
    movedLogo = event.target;
    movedLogo.style.zIndex = 1000;
});
document.addEventListener('mousemove', event => {
    if (movedLogo) {
        event.preventDefault();
        movedLogo.style.zIndex = 1000;
        movedLogo.style.left = `${event.pageX - movedLogo.offsetWidth / 2}px`;
        movedLogo.style.top = `${event.pageY - movedLogo.offsetHeight / 2}px`;
        movedLogo.classList.add('moving');
    }
});

document.addEventListener('mouseup', event => {
    movedLogo.style.zIndex = 1;
    if (movedLogo) {
        movedLogo.style.visibility = 'hidden';
        const point = document
            .elementFromPoint(event.clientX, event.clientY)
            .closest('#trash_bin');
        movedLogo.style.visibility = 'visible';

        if (point) {
            movedLogo.style.display = 'none';
        }
        movedLogo.classList.remove('moving');
        movedLogo = null;
    }
});