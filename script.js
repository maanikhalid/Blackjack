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

console.log (cards)
console.log (sum)

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
        
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    
    renderGame()
}

function drawCard(){
    let newCard = getRandomCard()
    sum += newCard
    
    cards.push(newCard); 

    renderGame()
}









