'use strict';

const nav = document.querySelector('.tabs-nav');
const tab = document.querySelector('.tabs-nav > li');
const tabsContent = document.querySelectorAll('.tabs-content > article');

for (let i = 0; i < tabsContent.length; i++) {
    const append = tab.cloneNode(true);
    nav.appendChild(append).textContent;
}

nav.removeChild(tab);

const tabs = document.querySelectorAll('.tabs-nav > li > a');

tabs[0].parentElement.classList.add('ui-tabs-active');

for (let i = 0; i < tabs.length; i++) {

    tabs[i].innerHTML = tabsContent[i].dataset.tabTitle;
    tabs[i].classList.add(tabsContent[i].dataset.tabIcon);
    tabs[i].addEventListener('click', event => tabsActive());
    tabsContent[i].classList.add('hidden');
}

tabsContent[0].classList.remove('hidden');

function tabsActive() {
    const activeTab = document.querySelector('.ui-tabs-active');
    activeTab.classList.remove('ui-tabs-active');
    event.target.parentElement.classList.add('ui-tabs-active');
    for (let content of tabsContent) {
        if (event.target.textContent !== content.dataset.tabTitle) {
            content.classList.add('hidden');
        } else {
            content.classList.remove('hidden');
        }
    }
}
