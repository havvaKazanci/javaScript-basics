
let firstPassword = document.querySelector("#first-el")
let secondPassword = document.querySelector("#second-el")
let passwordLength = 8
let firstPasswordStr = ""
let secondPasswordStr = ""

const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
"U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
"t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#",
"$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function randomIndex(){
    let index = Math.floor(Math.random() * characters.length)
    return index
}

function generatePassword(){

    firstPassword.value = randomPassword()
    secondPassword.value = randomPassword()
    
    
}

function randomPassword(){
    let password = ""
    for (let i = 0; i < passwordLength; i++){

        password += characters[randomIndex()]

    }
    return password 
}




