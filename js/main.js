// main.js

const aboutMeButton = qsc('over-mij');
const projectButton = qsc('projecten');
const projectButtonTwo = qsc('left .projecten');
const contactButton = qsc('contact');
const title = document.querySelector('h1');

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

aboutMeButton.addEventListener('click', function() {goTo('about-me')});
projectButton.addEventListener('click', function() {goTo('projects')});
if (projectButtonTwo) {
    projectButtonTwo.addEventListener('click', function() {goTo('projects')});
}
contactButton.addEventListener('click', function() {goTo('contact')});
title.addEventListener('click', function() {goTo('home')});