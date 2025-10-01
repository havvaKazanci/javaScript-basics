
const textEl = document.querySelector("#text-el")
const saveBtn = document.querySelector("#save-btn")
const ulEl = document.querySelector("#ul-el")
const deleteBtn = document.querySelector("#delete-btn")
let myLeads = []


let savedLeads = JSON.parse(localStorage.getItem("lead"))

if(savedLeads) {   //truly falsy used for if there is data in localStorage than show them all in list item li
    myLeads = savedLeads
    render(myLeads)
}


function render(leads) {   // adding <li> element with writed urls
    
    let listItems = " "
    for(let i = 0; i < leads.length; i++) {
        listItems += `<li> 
                        <a href='#' target='_blank'>${leads[i]} </a> 
                        </li>
        `
                        
    }
    
    ulEl.innerHTML = listItems
}   


saveBtn.addEventListener("click", function() {
    
    if(textEl.value) {  //truly falsy using for achieve if nothing in the text input and you click save button nothing happen

        myLeads.push(textEl.value)
        localStorage.setItem("lead",JSON.stringify(myLeads))
        textEl.value= ""
        render(myLeads)
    }
    
})

deleteBtn.addEventListener("dblclick", function() { //clears data from localStorage
 
        localStorage.clear()
        myLeads = []
        ulEl.textContent = ""

})



