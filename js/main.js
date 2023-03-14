// main.js

const aboutMeButton = qsc('over-mij');
const projectButton = qsc('projecten');
const projectButtonTwo = qsc('left .projecten');
const contactButton = qsc('contact');
const title = document.querySelector('h1');
const homeTitle = document.querySelector('.title');

let writeText = 'portfolio van maurits';
let i = 0;

function qsc(text) {
    return document.querySelector(`.${text}`);
}

function goTo(text) {
    switch(text) {
        case 'about-me':
            window.location.href = 'over-mij.html';
            break;
        case 'projects':
            window.location.href = 'projecten.html';
            break;
        case 'contact':
            window.location.href = 'contact.html';
            break;
        case 'home':
            window.location.href = 'index.html';
            break;
    }
}

function write() {
    if (i < writeText.length) {
        homeTitle.innerHTML += writeText.charAt(i);
        i++;
        setTimeout(write, 50);
    } else {
        i = 0;
        setTimeout(del, 2500);
    }
}

function del() {
    let j = writeText.length;
    if (i < j) {
        i++;
        homeTitle.innerHTML = homeTitle.innerHTML.slice(0, homeTitle.innerHTML.length - 1);
        setTimeout(del, 50);
    } else {
        setTimeout(write, 50);
        i = 0;
        if (writeText == 'welkom :)') {
            writeText = 'portfolio van maurits';
        } else {
            writeText = 'welkom :)';
        }
    }
}

if (homeTitle) {
    setTimeout(write, 50);
}

aboutMeButton.addEventListener('click', function() {goTo('about-me')});
projectButton.addEventListener('click', function() {goTo('projects')});
if (projectButtonTwo) {
    projectButtonTwo.addEventListener('click', function() {goTo('projects')});
}
contactButton.addEventListener('click', function() {goTo('contact')});
title.addEventListener('click', function() {goTo('home')});