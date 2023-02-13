
fetch("  http://localhost:3000/games")
    .then(res => res.json())
    .then(gamesArray => {
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