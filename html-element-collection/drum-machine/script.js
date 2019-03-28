'use strict';

const drums = document.getElementsByClassName('drum-kit__drum');

for (const drum of drums) {
    drum.onclick = () => {
        const sound = drum.getElementsByTagName('audio')[0];
        sound.currentTime = 0;
        sound.play();
    }
}