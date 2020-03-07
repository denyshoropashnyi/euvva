'use strict';

const aside = document.getElementsByClassName('aside')[0];
const subheader = document.getElementsByClassName('subheader')[0];
const toggleAsideBtn = document.getElementsByClassName('header__item--show')[0];
const asideNavText = document.getElementsByClassName('aside-nav__text');

toggleAsideBtn.addEventListener('click', toggleAsideState);

function toggleAsideState() {
    aside.classList.toggle('hidden');
    subheader.classList.toggle('hidden');
    toggleAsideBtn.classList.toggle('header__item--active');
    for (const prop in asideNavText) {
        asideNavText[prop].classList.toggle('hidden');
    }
}