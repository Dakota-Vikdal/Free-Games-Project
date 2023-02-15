//global variables
const gameCollection = document.querySelector("#game-collection")
const theSelect = document.querySelector('select')
const gameForm = document.querySelector(".add-game-form")



//creates Form container + button display on/off
let addGame = false;

const gameFormContainer = document.querySelector(".container");
gameFormContainer.style.display = "none"
const addBtn = document.querySelector("#new-game-btn");
  
addBtn.addEventListener("click", () => {
    if (addGame) {
      gameFormContainer.style.display = "none";
    } else {
      gameFormContainer.style.display = "block";
    }
    addGame = !addGame;
});

//fetch our data from local host 

fetch("  http://localhost:3000/games")
    .then(res => res.json())
    .then(gamesArray => {
        gamesArray.forEach( gameObj => {
            renderGame( gameObj )
        })
    })

//game card collection GENRE filter display 

theSelect.addEventListener('change', e => {
    
    document.querySelectorAll('.card').forEach(element => { 
        if(element.classList.contains(e.target.value)) {
            element.style.display = 'block'
        } else {
            element.style.display = 'none'
        }
    })
})

//RENDERS game cards into our game-collection container

function renderGame(game) {
    const divCard = document.createElement('div')
    const img = document.createElement('img')
    const title = document.createElement('h1')
    const description = document.createElement('p')
    const platform = document.createElement('p')
    const publisher = document.createElement('p')
    const developer = document.createElement('p')
    const releaseDate = document.createElement('p')

    divCard.className = `card ${game.genre}`
    img.src = game.thumbnail
    title.textContent = game.title
    description.textContent = `About: ${game.short_description}`
    platform.textContent = `Platform: ${game.platform}`
    publisher.textContent = `Publisher: ${game.publisher}`
    developer.textContent = `Developer: ${game.developer}`
    releaseDate.textContent = `Release Date: ${game.release_date}`


    divCard.append(img, title, description, platform, publisher, developer, releaseDate)
    gameCollection.append(divCard)

    title.addEventListener('mouseover',e => {
        e.target.style["boxShadow"] = "0px 5px 5px black";
    })
    description.addEventListener('mouseover',e => {
        e.target.style["boxShadow"] = "0px 5px 5px black";
    })
    platform.addEventListener('mouseover',e => {
        e.target.style["boxShadow"] = "0px 5px 5px black";
    })
    publisher.addEventListener('mouseover',e => {
        e.target.style["boxShadow"] = "0px 5px 5px black";
    })
    developer.addEventListener('mouseover',e => {
        e.target.style["boxShadow"] = "0px 5px 5px black";
    })
    releaseDate.addEventListener('mouseover',e => {
        e.target.style["boxShadow"] = "0px 5px 5px black";
    })
    divCard.addEventListener('mouseout', (e) => {
        e.target.style["boxShadow"] = "0px 10px 10px 0px rgb(255, 255, 255)"
    })

}

//add new game form object
gameForm.addEventListener("submit", (e) =>{
    e.preventDefault()
    
    let newGameObject = { 
        title: e.target.title.value,
        thumbnail: e.target.thumbnail.value,
        short_description: e.target.short_description.value,
        genre: e.target.genre.value.charAt(0).toUpperCase() + e.target.genre.value.slice(1),
        platform: e.target.platform.value,
        publisher: e.target.publisher.value,
        developer: e.target.developer.value,
        release_date: e.target.release_date.value,
    }

    renderGame(newGameObject)
    gameForm.reset()

    fetch('http://localhost:3000/games', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newGameObject)
    });
})


