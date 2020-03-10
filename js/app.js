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




const infoForm = document.getElementsByClassName('info__form')[0];
const infoList = document.getElementsByClassName('info__list')[0];

const titleInput = document.getElementsByClassName('input--title')[0];
const textInput = document.getElementsByClassName('input--text')[0];

const addInfoBtn = document.getElementsByClassName('btn--add')[0];

const template = document.getElementById('template').innerHTML;


infoForm.addEventListener('submit', newInfoFormSubmit);
addInfoBtn.addEventListener('click', showInput)

function newInfoFormSubmit(e) {
    e.preventDefault();
    submitInfo();
}

function showInput() {
    titleInput.classList.toggle('hidden');
    textInput.classList.toggle('hidden');
}


function submitInfo() {
    let infoRow;
    infoRow = document.createElement('tr');
    infoRow.className = 'info__row';
    infoRow.innerHTML = template
        .replace('{{title}}', titleInput.value || '-')
        .replace('{{text}}', textInput.value || '-');
    infoList.append(infoRow);

    resetInfoForm();
}

function resetInfoForm() {
    titleInput.value = '';
    textInput.value = '';
}