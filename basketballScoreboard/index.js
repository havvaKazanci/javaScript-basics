

let addPoint = document.getElementsByClassName("add-point")
let homeScoreView = document.getElementById("home-score")
let guestScoreView = document.getElementById("guest-score")
let homeScore = 0
let guestScore = 0

function onePoint(){
    homeScore += 1
    homeScoreView.textContent = homeScore
}

function twoPoint(){
    homeScore += 2
    homeScoreView.textContent = homeScore
}


function threePoint(){
    homeScore += 3
    homeScoreView.textContent = homeScore
}


function onePointGuest(){
    guestScore += 1
    guestScoreView.textContent = guestScore

}

function twoPointGuest(){
    guestScore += 2
    guestScoreView.textContent = guestScore

}

function threePointGuest(){
    guestScore += 3
    guestScoreView.textContent = guestScore

}