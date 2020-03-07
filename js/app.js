'use strict';

const aside = document.getElementsByClassName('aside')[0];
const subheader = document.getElementsByClassName('subheader')[0];
const toggleAsideBtn = document.getElementsByClassName('header__item--show')[0];
const asideNavText = document.getElementsByClassName('aside-nav__text');
const asideNavFooter = document.getElementsByClassName('aside-nav__footer')[0];
const burger = document.getElementsByClassName('burger')[0];


toggleAsideBtn.addEventListener('click', toggleAsideState);

burger.addEventListener('mouseover', burgerHoverTriggerOn);
aside.addEventListener('mouseleave', burgerHoverTriggerOff);


function toggleAsideState() {
    toggleAsideBtn.classList.toggle('header__item--clicked');
    burger.classList.toggle('hidden');
    aside.classList.toggle('hidden');
    subheader.classList.toggle('hidden');
    asideNavFooter.classList.toggle('aside-nav__footer--row');
    aside.classList.toggle('aside--wider');

    for (const prop in asideNavText) {
        asideNavText[prop].classList.toggle('hidden');
    }
}


function burgerHoverTriggerOn() {
    burger.classList.toggle('hidden');
    aside.classList.toggle('hidden');
}

function burgerHoverTriggerOff() {
    if (toggleAsideBtn.classList != 'header__item--show header__item--clicked') {
        aside.classList.toggle('hidden');
        burger.classList.toggle('hidden');
    }
}