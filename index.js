
fetch("  http://localhost:3000/games")
    .then(res => res.json())
    .then(gamesArray => {
        gamesArray.forEach( gameObj => {
            renderGame( gameObj )
        })
    })

const gameCollection = document.querySelector("#game-collection")

const theSelect = document.querySelector('select')
theSelect.addEventListener('change', e => {
    
    document.querySelectorAll('.card').forEach(element => {

    if(element.classList.contains(e.target.value)) {
        element.style.display = 'block'
    } else {
        element.style.display = 'none'
    }
})
})

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

    img.addEventListener('mouseover',e => {
        e.target.style["box-shadow"] = "10px 5px 5px red";
    })

}


// function filterGenre(gamesArray) {
//     gamesArray.filter( gameGenre => {
//          if ( gameGenre.genre == "Shooter")
//              return console.log(gameGenre)
//      } )
     
// }



// shooterBtn.addEventListener('click', filterGenre)
// console.log(shooterBtn);

// const allGamesBtn = document.querySelector("#all-games")

// const shooterBtn = document.querySelector("#shooter")
// const mmoarpgBtn = document.querySelector('#mmoarpg')
// const strategyBtn = document.querySelector('#Strategy')