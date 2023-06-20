const cardWrapper = document.querySelector('.projects');

fetch('data/projects.json')
.then(myData => myData.json())
.then(jsonData => updateCards(jsonData));

function updateCards(jsonData) {
    for (let i = 0; i < jsonData.length; i++) {
        if (jsonData[i].source == "") {
            cardWrapper.innerHTML += 
        `
        <div class="card">
            <h2 class="card-title">${jsonData[i].name}</h2>
            <h6 class="text-muted">${jsonData[i].subname}</h6><br>
            <img class="card-img" src="img/${jsonData[i].image}">
            <p class="card-description">${jsonData[i].description}</p>
            <br>
            <a href="${jsonData[i].link}" class="btn-card" target="_blank">Visit</a>
            <a class="btn-card btn-disabled" target="_blank">Source code</a>
        </div>
        `
        } else {
            cardWrapper.innerHTML += 
        `
        <div class="card">
            <h2 class="card-title">${jsonData[i].name}</h2>
            <h6 class="text-muted">${jsonData[i].subname}</h6><br>
            <img class="card-img" src="img/${jsonData[i].image}">
            <p class="card-description">${jsonData[i].description}</p>
            <br>
            <a href="${jsonData[i].link}" class="btn-card" target="_blank">Visit</a>
            <a href="${jsonData[i].source}" class="btn-card" target="_blank">Source code</a>
        </div>
        `
        }
    }
}