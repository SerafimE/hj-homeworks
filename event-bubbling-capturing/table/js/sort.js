'use strict';

const handles = document.querySelectorAll('tr > th');
for (let handle of handles) {
    handle.addEventListener('click', handleTableClick)
}

function handleTableClick(event) {
    event.currentTarget.dataset.sortBy = event.target.dataset.propName;
    event.currentTarget.dataset.dir = event.target.dataset.dir === '1' ? '-1' : '1';
    sortTable(event.currentTarget.dataset.sortBy, event.target.dataset.dir);
}
