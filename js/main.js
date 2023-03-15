/*

Maurits' Portfolio
made in 2023

*/

const title = document.querySelector('.title');
const index = document.querySelectorAll('.index h1');
const indexWrap = document.querySelector('.index');

function dropIndex() {
    let currentDelay = 0;   // extra delay between index items
    indexWrap.style = 'z-index: 1;' // make index hoverable (appear above background)
    // for each for every item in index
    index.forEach(function(data) {
        // for each letter in the item
        for (let i = 0; i < data.innerText.length; i++) {
            // pop out after i*30 milliseconds + extra delay between index items
            setTimeout(function() {
                data.childNodes[i].style.transform = "translateY(-10px)"    // pop up
                data.childNodes[i].style.opacity = "1"  // make it visible
            }, currentDelay + i*30);
            setTimeout(function() {
                data.childNodes[i].style.transform = "translateY(0px)"  // go down again
            }, currentDelay + i*30 + 500); // after 500 milliseconds of being up
        }
        currentDelay += 500;    // wait 500 milliseconds before animating next index item
    });
}

// Turn each item in index into seperate <span> elements for every letter to animate

// Loop through each item in index
index.forEach(function(data) {
    let currentString = ''  // Makes an empty string to start with
    // Loops through every letter in the word
    for (let i = 0; i < data.innerText.length; i++) {
        // Adds the opacity, letter and custom l{i} class for animation
        currentString += `<span class="opacity letter l${i}">${data.innerText[i]}</span>`;
    }
    data.innerHTML = currentString; // Set innerHTML of index item to the newly made string
});

title.addEventListener('click', dropIndex)  // add event listener

/*

Changing pages

*/

const projectsIndex = document.querySelector('.projects');
const projects = document.querySelector('.projects-div');
const aboutMeIndex = document.querySelector('.about-me');
const aboutMe = document.querySelector('.about-me-div');
const contactIndex = document.querySelector('.contact');
const contact = document.querySelector('.contact-div');

function changePage(newPage) {
    if (newPage == 'projects') {
        window.location.replace('#projects');
    } else if (newPage == 'aboutMe') {
        window.location.replace('#about-me');
    } else if (newPage == 'contact') {
        window.location.replace('#contact');
    }
}

projectsIndex.addEventListener('click', function() {changePage('projects')});
aboutMeIndex.addEventListener('click', function() {changePage('aboutMe')});
contactIndex.addEventListener('click', function() {changePage('contact')});