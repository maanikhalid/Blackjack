let player = {
    name : "David",
    chips : 0
}

let cards = []
let sum = 0
let sumAI = []
let hasBlackJack = false
let isAlive = false
let message = ""
let messageAi = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#card-el")
let noMoreCards = document.querySelector(".btn-draw")
let playerEl = document.querySelector("#player-el")



playerEl.textContent= player.name + ": £" + player.chips


function renderGame (){
        
    cardsEl.textContent = "Your cards: "
    
    for (i = 0 ; i < cards.length ; i++)
        {
            cardsEl.textContent += (cards[i]) + " "
        
        }

    sumEl.textContent = "Sum: " + sum

    
    if (sum <= 20) {
        message= "Draw a new card?"
        isAlive = true
    } else if (sum === 21){
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game"
        messageAi = "The AI wins the game"
        isAlive = false
    }
        messageEl.textContent = message
    

    if (hasBlackJack === true){
        player.chips += 10
        playerEl.textContent= player.name + ": £" + player.chips  + " Congrats!"
    } else {
         playerEl.textContent= player.name + ": £" + player.chips 
    }
    
}



function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13 +1) 
    if (randomNumber > 10){
        return 10 
    } else if (randomNumber === 1){
        return 11
    } else {
        return randomNumber
    }


}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    
    hasBlackJack = false
    
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    
        noMoreCards.textContent = "Draw new card"
    
    renderGame()
}

function drawCard(){
    
    if (isAlive === true && hasBlackJack === false){
        
       let newCard = getRandomCard()
        sum += newCard

        cards.push(newCard); 

        renderGame()
    } else { }
    
    if (sum > 21) {
    noMoreCards.textContent = "No more cards"
} else {
    noMoreCards.textContent = "Draw new card"
}
    

    
}









