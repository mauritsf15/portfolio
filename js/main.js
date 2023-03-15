const title = document.querySelector('.title');
const index = document.querySelectorAll('.index h1');

function dropIndex() {
    let currentDelay = 0;
    index.forEach(function(data) {
        for (let i = 0; i < data.innerText.length; i++) {
            setTimeout(function() {
                data.childNodes[i].style.transform = "translateY(-10px)"
                data.childNodes[i].style.opacity = "1"
            }, currentDelay + i*30);
            setTimeout(function() {
                data.childNodes[i].style.transform = "translateY(0px)"
            }, currentDelay + i*30 + 500);
        }
        currentDelay += 500;
    });
}

index.forEach(function(data) {
    let currentString = ''
    for (let i = 0; i < data.innerText.length; i++) {
        currentString += `<span class="opacity letter l${i}">${data.innerText[i]}</span>`;
    }
    data.innerHTML = currentString;
});

title.addEventListener('click', dropIndex)