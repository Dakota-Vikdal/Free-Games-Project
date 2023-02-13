
fetch("  http://localhost:3000/games")
    .then(res => res.json())
    .then(gamesArray => {
        filterGenre(gamesArray),                //<--- HUGE WIN ON THIS
        gamesArray.forEach( gameObj => {
            renderGame( gameObj )
        })
    })

const gameCollection = document.querySelector("#game-collection")

function renderGame(game) {
    const img = document.createElement('img')
    img.src = game.thumbnail
    gameCollection.append(img)

}


function filterGenre(gamesArray) {
    gamesArray.filter( gameGenre => {
         if ( gameGenre.genre == "Shooter")
             return console.log(gameGenre)
     } )
}
