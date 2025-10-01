
let messageEl = document.querySelector("#message-el")
let cardsEl = document.querySelector("#cards-el")
let sumEl = document.querySelector("#sum-el")
let playerEl = document.querySelector("#player-el")
let sum = 0
let cards = []
isAlive = false;
hasBlackJack = false;


function startGame(){

    isAlive = true;
    let firstNumber = generateRandomNumber()
    let secondNumber = generateRandomNumber()
    cards = [firstNumber,secondNumber]
    sum = cards[0] + cards[1]
    renderGame()
}


function renderGame(){
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++)
    {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message

}



function newCard(){
    if (isAlive === true && hasBlackJack === false){
        let newCard = generateRandomNumber()
        sum += newCard
        cards.push(newCard)
        renderGame()
    }
}


function generateRandomNumber(){
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if(randomNumber > 10){
        return 10
    }else if(randomNumber === 1){
        return 11
    }else{
        return randomNumber
    }
}

