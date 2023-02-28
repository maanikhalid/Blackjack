// Variables set
let firstCard = 10
let secondCard = 9
let playerTotal = firstCard + secondCard;

//GET DOM elements 
const myPlayerCardsElement = document.getElementById("playerCards");
const myPlayerFirstCardElement = document.getElementById("firstCard");
const myPlayerSecondCardElement = document.getElementById("secondCard");
const myPlayerTotalElement = document.getElementById("playerTotalCards");

const aiCardsElement = document.getElementById("aiCards");
const aiTotalElement = document.getElementById("aiTotalCards");

//DOM messages
const winner = document.getElementById("btn-winner");
const loser = document.getElementById("btn-loser");
const draw = document.getElementById("btn-draw");

const winnerAI = document.getElementById("btn-winner-ai");
const loserAI = document.getElementById("btn-loser-ai");
const drawAI = document.getElementById("btn-draw-ai");


// Check player cards
myPlayerFirstCardElement.innerText = firstCard;
myPlayerSecondCardElement.innerText = secondCard;

// Display total
myPlayerTotalElement.innerText = playerTotal;


// Display status
winner.style.display ="none";
loser.style.display ="none";
draw.style.display ="none";
winnerAI.style.display ="none";
loserAI.style.display ="none";
drawAI.style.display ="none";

if (playerTotal > 21) {
    winner.style.display ="none";
    loser.style.display ="block";
    draw.style.display ="none";
    winnerAI.style.display ="block";
    loserAI.style.display ="none";
    drawAI.style.display ="none";
} else if (playerTotal < 21) {
    winner.style.display ="block";
    loser.style.display ="none";
    draw.style.display ="none";
    winnerAI.style.display ="none";
    loserAI.style.display ="block";
    drawAI.style.display ="none";
}else {
    winner.style.display ="none";
    loser.style.display ="none";
    draw.style.display ="nblock";
    winnerAI.style.display ="none";
    loserAI.style.display ="none";
    drawAI.style.display ="block";
}


// Generate a random number 
function drawCard(){

}


