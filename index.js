
fetch("  http://localhost:3000/games")
    .then(res => res.json())
    .then(gamesArray => {
        gamesArray.forEach( gameObj => {
            renderGame( gameObj )
        })
    })

function renderGame(game) {
    console.log(game)

}