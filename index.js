let homeScore = 0
let homeScoreBoard = document.getElementById("home-score")

let awayScore = 0
let awayScoreBoard = document.getElementById("away-score")

function homeOne() {
    homeScore +=1
    homeScoreBoard.innerText = homeScore
}
function homeTwo() {
    homeScore +=2
    homeScoreBoard.innerText = homeScore
}
function homeThree() {
    homeScore +=3
    homeScoreBoard.innerText = homeScore
}


function awayOne() {
    awayScore +=1
    awayScoreBoard.innerText = awayScore
}
function awayTwo() {
    awayScore +=2
    awayScoreBoard.innerText = awayScore
}
function awayThree() {
    awayScore +=3
    awayScoreBoard.innerText = awayScore
}

function newGame() {
    homeScore = 0
     homeScoreBoard.innerText = homeScore
    awayScore = 0
    awayScoreBoard.innerText = awayScore
}