// Extract the query parameters from the URL
const urlParams = new URLSearchParams(window.location.search);

// Access each flight detail from the query string
const origin = urlParams.get('origin');
const destination = urlParams.get('destination');
const boardDate = urlParams.get('boardDate');
const boardTime = urlParams.get('boardTime');
const arrivalDate = urlParams.get('arrivalDate');
const arrivalTime = urlParams.get('arrivalTime');
const noSeat = urlParams.get('noSeat');


// Use these variables to populate the order page as needed

let detailsOrigin = document.getElementById("detailsOrigin") ; 
detailsOrigin.innerText = `Origin : ${origin} Boarding : ${boardDate} ${boardTime}` ;

let detailsDestination = document.getElementById("detailsDestination") ; 
detailsDestination.innerText = `Destination : ${destination} Boarding : ${arrivalDate} ${arrivalTime}` ;

const passNum = document.getElementById("passNum") ;
passNum.innerText += "  " +  noSeat ; 


const numberOfSeat = document.getElementById("num") ;
for (let index = 0; index < noSeat; index++) {
    const p = document.createElement("p")
    p.innerText = "Passenger : " + (index + 1)
    const nameLabel = document.createElement("label") 
    nameLabel.innerText ="Name : " 
    const nameInput = document.createElement("input")
    nameInput.type = "text"
    nameInput.name = "Passngername" + (index + 1)

    const nameDiv = document.createElement("div")
    nameDiv.appendChild(nameLabel)
    nameDiv.appendChild(nameInput)

    
    const passLabel = document.createElement("label") 
    passLabel.innerText ="Passport id : " 
    const passInput = document.createElement("input")
    passInput.type = "text"
    passInput.name = "PassId" + (index + 1)

    const passDiv = document.createElement("div")
    passDiv.appendChild(passLabel)
    passDiv.appendChild(passInput)

    passNum.appendChild(p)
    passNum.appendChild(nameDiv)
    passNum.appendChild(passDiv)
}

function validate(event) { 
    event.preventDefault()
    const ids = [] 
    for (let index = 0; index < noSeat; index++) {
        const name = "Passngername" + (index + 1) ; 
        const id = "PassId" + (index + 1) ;
        if (event.srcElement.elements[name].value.length == 0  || event.srcElement.elements[id].value.length == 0  ) {
            alert("error")
            return
        }
        if (ids.includes(event.srcElement.elements[id].value)) {
            alert("error")
            return
        }
        ids.push(event.srcElement.elements[id].value)
       
    }
 }
