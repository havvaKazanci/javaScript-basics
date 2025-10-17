const consentContainer = document.querySelector("#consent-container")
const formSection = document.getElementById("form-section")
const consentText = document.getElementById("consent-text")
const closeBtn = document.querySelector("#close-btn")


setTimeout(function(){
    consentContainer.style.display = "inline"
},1500)

closeBtn.addEventListener("click", function(){
    consentContainer.style.display = "none"
})

formSection.addEventListener('submit', function(event){
    event.preventDefault()

    const consentFormData = new FormData(formSection)
    const fullName = consentFormData.get('fullName')

    consentText.innerHTML = `
    <div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="upload-text">Uploading your data to the dark web...</p>
    </div>`

    setTimeout(function(){
        document.getElementById('upload-text').innerText = `
        Making the sale...`
    }, 1500)

    setTimeout(function(){
        document.getElementById('consent-main-container').innerHTML = `
        <h2>Thanks <span class="modal-display-name">${fullName}</span>, you sucker! </h2>
        <p>We just sold the rights to your eternal soul.</p>
        <div class="idiot-gif">
            <img src="images/pirate.gif">
        </div>
    `
        closeBtn.disabled = false
    }, 3000)

    
})