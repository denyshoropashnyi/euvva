'use strict';

// APP FOR ASIDE, SUBHEADER AND BURGER BEHAVIOR

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


// APP FOR FORM BEHAVIOR


const infoForm = document.getElementsByClassName('info__form')[0];
const infoList = document.getElementsByClassName('info__list')[0];

const titleInput = document.getElementsByClassName('input--title')[0];
const textInput = document.getElementsByClassName('input--text')[0];

const addInfoBtn = document.getElementsByClassName('btn--add')[0];
// const resetInfoBtn = document.getElementsByClassName('btn--cancel')[0];
const saveInfoBtn = document.getElementsByClassName('btn--save')[0];

const editInfoBtn = document.getElementsByClassName('btn--edit')[0];

const template = document.getElementById('template').innerHTML;


addInfoBtn.addEventListener('click', showInput);


infoForm.addEventListener('submit', submitInfo);

infoForm.addEventListener('click', addEditInfo);


////

function addEditInfo(event) {
    let child = event.target.parentNode.children;

    if ((event.target.classList.contains('template__title')) || (event.target.classList.contains('template__text'))) {
        titleInput.value = child[0].innerHTML;
        textInput.value = child[1].innerHTML;
        submitEditInfo();
    }
}

function submitEditInfo() {
    infoList.addEventListener('click', findId);

    function findId(event) {

        saveInfoBtn.addEventListener('contextmenu', saveEditInfo)

        let editRowID = event.target.parentNode.getAttribute('id');
        let editRow = document.getElementById(editRowID);
        console.log(editRow);


        function saveEditInfo() {
            // editRow = document.getElementById(editRowID);
            editRow.innerHTML = template
                .replace('{{title}}', titleInput.value)
                .replace('{{text}}', textInput.value);
        }
    }
}

////



function showInput() {
    titleInput.classList.toggle('hide');
    textInput.classList.toggle('hide');
}

function submitInfo(e) {
    e.preventDefault();
    addInfo();
}

function addInfo() {
    let infoRow;

    infoRow = document.createElement('tr');
    infoRow.className = 'info__row';
    infoRow.setAttribute('id', Math.random());

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


const printBtn = document.getElementsByClassName('btn--print')[0];

printBtn.addEventListener('click', printWindow);

function printWindow() {
    let printContents = infoList.innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    document.body.innerHTML = originalContents;
    window.print();
}


const downloadBtn = document.getElementsByClassName('btn--download')[0];

downloadBtn.addEventListener('click', downloadPDF);

function downloadPDF() {
    const element = document.getElementById('print');
    html2pdf()
        .from(element)
        .save();
}



// APP FOR REMINDERS BEHAVIOR

const reminders = document.getElementsByClassName('reminders')[0];
const reminderCount = document.getElementsByClassName('reminders__raw').length;
const notification = document.getElementsByClassName('header__item--notification')[0];
const bell = document.getElementsByClassName('bell')[0];

const recentEventsInfo = document.getElementsByClassName('header__item--time')[0];
const recentEventsHours = document.getElementsByClassName('header__item--hours')[0];
const recentEventsDate = document.getElementsByClassName('header__item--date')[0];


notification.addEventListener('click', showRemindersList);
infoForm.addEventListener('submit', updateTime);


function showRemindersList() {
    reminders.classList.toggle('hidden');
    notification.classList.remove('count--animated');
    bell.classList.remove('bell--animated');
}

bell.textContent = reminderCount;


function updateTime() {
    let today = new Date();
    let recentSubmitDate = today.getFullYear() + '.' + (today.getMonth() + 1) + '.' + today.getDate();
    let recentSubmitTime = today.getHours() + ":" + today.getMinutes();

    recentEventsHours.textContent = recentSubmitTime;
    recentEventsDate.textContent = recentSubmitDate;
}