let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let aiCardsDraw = getRandomCard()
let sum = firstCard + secondCard 
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#card-el")
let aimessageEl = document.getElementById("aimessage-el")
let aisumEl = document.querySelector("#aisum-el")
let aicardsEl = document.querySelector("#aicard-el")


function  getRandomCard() {
    
}

function startGame(){
    renderGame()
}

function renderGame (){
    cardsEl.textContent = "Your cards: "
    aicardsEl.textContent = "AI cards: " 
    
    for (i = 1 ; i < )
    
    for (i = 0 ; i < cards.length ; i++)
        {
            cardsEl.textContent += (cards[i]) + " "
        
        }

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

function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*10 +1) 
    return randomNumber;
}

function drawCard(){
    let newCard = getRandomCard()
    sum += newCard
    
    cards.push(newCard); 

    renderGame()
}









