'use strict';

const acSelect = document.getElementById('acSelect');
const btnSeatMap = document.getElementById('btnSeatMap');
const btnSetFull = document.getElementById('btnSetFull');
const btnSetEmpty = document.getElementById('btnSetEmpty');
const seatMapDiv = document.getElementById('seatMapDiv');
const seatMapTitle = document.getElementById('seatMapTitle');
const totalPax = document.getElementById('totalPax');
const totalAdult = document.getElementById('totalAdult');
const totalHalf = document.getElementById('totalHalf');

btnSetEmpty.disabled = true;
btnSetFull.disabled = true;
totalAdult.textContent = `0`;
totalHalf.textContent = `0`;
totalPax.textContent = `0`;

btnSeatMap.addEventListener('click', getSeatMap);
acSelect.addEventListener('change', clearSeatMap);

function getSeatMap(event) {
    event.preventDefault();
    const request = new XMLHttpRequest();
    request.open('GET', `https://neto-api.herokuapp.com/plane/${acSelect.value}`);
    request.send();
    request.addEventListener('load', onLoad);

    function onLoad() {
        if (request.status === 200) {
            const response = JSON.parse(request.responseText);
            showSeatMap(response);
            document.querySelector('h3.text-center').textContent = '';
        }
    }
}

function showSeatMap(map) {
    const planeMap = document.createDocumentFragment();
    seatMapTitle.textContent = `${map.title} (${map.passengers} пассажиров)`;
    map.scheme.forEach((row, rowNumber) => createRow(row, rowNumber));

    function createRow(row, rowNumber) {
        const rowDiv = createElem('div', 'row seating-row text-center', [
            createElem('div', 'col-xs-1 row-number', [
                createElem('h2', '', `${rowNumber + 1}`)
            ])
        ]);

        let seatDiv;
        let letters = [];
        switch (row) {
            case 6:
                letters = map.letters6;
                break;
            case 4:
                letters = map.letters4;
                break;
        }

        for (let i = 0; i < 6; i++) {
            if (i === 0 || i === 3) {
                seatDiv = createElem('div', 'col-xs-5', '');
            }
            if (letters[i]) {
                seatDiv.append(createElem('div', 'col-xs-4 seat', [createElem('span', 'seat-label', letters[i])]));
            } else {
                if (!letters.indexOf('A')) {
                    seatDiv.append(createElem('div', 'col-xs-4 no-seat', ''));
                    console.log('пусто');
                }
            }
            if (i === 2 || i === 5) {
                rowDiv.append(seatDiv);
            }
        }

        planeMap.append(rowDiv);
        seatMapDiv.appendChild(planeMap);
    }

    btnSetEmpty.disabled = false;
    btnSetFull.disabled = false;

    const seats = seatMapDiv.querySelectorAll('.seat');

    for (let seat of seats) {
        seat.addEventListener('click', selectSeat);
    }

    function selectSeat() {
        event.preventDefault();
        if (event.altKey) {
            this.classList.remove('adult');
            this.classList.toggle('half');
        } else {
            this.classList.remove('half');
            this.classList.toggle('adult');
        }
        countSeats();
    }

    btnSetFull.addEventListener('click', () => {
        event.preventDefault();
        for (let seat of seats) {
            if (event.altKey) {
                seat.classList.remove('adult');
                seat.classList.add('half');
            } else {
                seat.classList.remove('half');
                seat.classList.add('adult');
            }
        }
        countSeats();
    });

    btnSetEmpty.addEventListener('click', () => {
        event.preventDefault();
        for (let seat of seats) {
            seat.classList.remove('half');
            seat.classList.remove('adult');
        }
        countSeats();
    });

    function countSeats() {
        let countAdult = 0;
        let countHalf = 0;
        for (let seat of seats) {
            countAdult += seat.classList.contains('adult');
            countHalf += seat.classList.contains('half');
        }
        totalAdult.textContent = `${countAdult}`;
        totalHalf.textContent = `${countHalf}`;
        totalPax.textContent = `${countAdult + countHalf}`;
    }

}

function createElem(tagName, classList, children) {
    const element = document.createElement(tagName);
    element.className = classList;
    if (typeof children === 'string') {
        element.textContent = children;
    } else if (children instanceof Array) {
        children.forEach(child => element.appendChild(child));
    }
    return element;
}

function clearSeatMap() {
    seatMapDiv.textContent = '';
    seatMapDiv.append(createElem('h3', 'text-center', 'Самолёт не выбран'));
    seatMapTitle.textContent = 'Выберите самолёт';
    btnSetEmpty.disabled = true;
    btnSetFull.disabled = true;
}
