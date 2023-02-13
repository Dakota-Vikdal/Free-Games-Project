
fetch("  http://localhost:3000/games")
    .then(res => res.json())
    .then(gamesArray => {
        filterGenre(gamesArray),
        gamesArray.forEach( gameObj => {
            renderGame( gameObj )
        })
    })

const gameCollection = document.querySelector("#game-collection")
const allGamesBtn = document.querySelector("#all-games")

const shooterBtn = document.querySelector("#shooter")
const mmoarpgBtn = document.querySelector('#mmoarpg')
const strategyBtn = document.querySelector('#Strategy')




function renderGame(game) {
    const img = document.createElement('img')
    const title = document.createElement('h1')
    const description = document.createElement('p')
    img.src = game.thumbnail
    title.textContent = game.title
    description.textContent = game.short_description
    gameCollection.append(img, title, description)

}


function filterGenre(gamesArray) {
    gamesArray.filter( gameGenre => {
         if ( gameGenre.genre == "Shooter")
             return console.log(gameGenre)
     } )
     
}
shooterBtn.addEventListener('click', filterGenre)
console.log(shooterBtn);