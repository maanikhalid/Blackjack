let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let aiCardsDraw = []
let aiTotalSumm = []
let sum = firstCard + secondCard 
let sumAI = []
let hasBlackJack = false
let isAlive = true
let message = ""
let messageAi = ""
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
    
   
    
    for (i = 0 ; i < cards.length ; i++)
        {
            cardsEl.textContent += (cards[i]) + " "
        
        }

    sumEl.textContent = "Sum: " + sum

    
    if (sum <= 20) {
        message= "Draw a new card?"
        messageAi = "The AI drew these cards"
        isAlive = true
    } else if (sum === 21){
        message = "You've got Blackjack!"
        hasBlackJack = true
        messageAi = "The AI drew these cards"
    } else {
        message = "You're out of the game"
        messageAi = "The AI wins the game"
        isAlive = false
    }
        messageEl.textContent = message
        aimessageEl.textContent = messageAi
    
    
    // AI first draw
    for  (i = 0 ;  i < 20 ; i++) {
        
        if (sumAI.length < 3) {
    let aiCardDraw = getRandomCard()
    sumAI += aiCardDraw
    
    aiCardsDraw.push(aiCardDraw) 
    console.log(aiCardsDraw) 
            
            } else {
                console.log("This is the end")
            }
    
    }
    
        aicardsEl.textContent += (aiCardsDraw) 
    

    
    aisumEl.textContent = aiCardsDraw.reduce((pv, cv) => pv + cv, 0);

}


function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*10 +1) 
    return randomNumber;
}

function aiDrawCard(){

    
}

function drawCard(){
    let newCard = getRandomCard()
    sum += newCard
    
    cards.push(newCard); 

    renderGame()
}









