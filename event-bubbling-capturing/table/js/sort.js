'use strict';

function handleTableClick(event) {
    const field = event.currentTarget.dataset.sortBy = event.target.dataset.propName;
    const direction = (event.target.dataset.dir = (!event.target.dataset.dir) ? 1 : event.target.dataset.dir * -1);
    sortTable(field, direction);
}
