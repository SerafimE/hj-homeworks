'use strict';

const contactsObject = JSON.parse(loadContacts());

const elem = document.querySelector('ul.contacts-list');

document.querySelector('ul.contacts-list > li').parentNode.removeChild(document.querySelector('ul.contacts-list > li'));

for (let i = 0; i < contactsObject.length; i++) {

    const li = document.createElement('li');
    li.dataset.email = contactsObject[i].email;
    li.dataset.phone = contactsObject[i].phone;

    elem.append(li);
    li.appendChild((document.createElement('strong'))).textContent = contactsObject[i].name;
}