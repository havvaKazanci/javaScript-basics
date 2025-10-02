

const metersParag = document.querySelector("#meters-parag")
const volumesParag = document.querySelector("#volumes-parag")
const kilosParag = document.querySelector("#kilos-parag")
const convertBtn = document.querySelector("#convert-btn")
const inputEl = document.querySelector("#input-el")

function calculateMeter() {
    let number = Number(inputEl.value) 
    let meter = number * 3.281
    let feet = number / 3.281
    
    
    let result = `${number} meters = ${meter.toFixed(3)} feet | ${number} feets = ${feet.toFixed(3)} meters`
    return result
}


function calculateLiter() {
    let number = Number(inputEl.value)  
    let liter = number * 0.264 
    let gallon = number / 0.264
    let result = `${number} liters = ${liter.toFixed(3)} gallons | ${number} gallon = ${gallon.toFixed(3)} liters`
    return result
}


function calculateKilo() {
    let number = Number(inputEl.value)  
    let kilo = number * 2.204
    let pound = number / 2.204
    let result = `${number} kilos = ${kilo.toFixed(3)} pounds | ${number} pound = ${pound.toFixed(3)} kilos`
    return result
}



convertBtn.addEventListener("click", function() {
    metersParag.textContent = calculateMeter()
    volumesParag.textContent = calculateLiter()
    kilosParag.textContent = calculateKilo()
})