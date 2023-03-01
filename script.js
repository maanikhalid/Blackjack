let firstCard = 10
let secondCard = 7
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard 
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#card-el")


function startGame(){
    renderGame()
}

function renderGame (){
    cardsEl.textContent = "Your cards: " + cards[0] + " & " + cards[1]
    sumEl.textContent = "Sum: " + sum
    
    if (sum <= 20) {
        message= "Do you want to draw a new card?"
        isAlive = true
    } else if (sum === 21){
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game"
        isAlive = false
    }
        messageEl.textContent = message

}


function drawCard(){
    let newCard = 1
    sum += newCard
    renderGame()
}