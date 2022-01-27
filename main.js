
const textRound = document.querySelector("#round")
const textStatus = document.querySelector("#status")
let round = 0
let foundPairs  = 0

document.querySelector("#size").onclick = function() {
    startGame()
}

function startGame () {
    resetGame()
}

function resetGame () {
    resetRound()
    resetStatus()
    mixColors()
    handleClicks()
}


function resetRound () {
    round = 0
    textRound.innerText = `Ronda Nº ${round}`
}

function resetStatus () {
    foundPairs = 0
    textStatus.innerText = `Aún no llevas ningún par encontrado... :(`
}

function convertToArray (colors) {
    let array = []
    for (let i = 0; i < colors.length; i++) {
        array.push(colors[i])
    }
    return array
}

const board = document.querySelector("#board")

function mixColors () {
    const allColors = document.querySelectorAll(".color")
    const arrayColors = convertToArray(allColors)
    arrayColors.sort(()=> Math.random() - 0.5);

    allColors.forEach(function(i){
        board.removeChild(i)
    })
    arrayColors.forEach(function(i){
        board.appendChild(i)
    })

    arrayColors.forEach(function(i) {
        i.style.background = i.id
        i.style.color = i.id
    });
    setTimeout( function() {
     arrayColors.forEach(function(i) {
        i.style.background = "grey"
        i.style.color = "grey"
    });   
    }, 1250);
    
}

