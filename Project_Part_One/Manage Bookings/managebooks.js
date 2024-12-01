import{Bookings, books} from "./bookClass.js"

const mybook = document.getElementById("mybook") ;


for (let index = 0; index < books.length; index++) {
    
    const detailsOrigin = document.createElement("p") ;
    detailsOrigin.innerText = `Origin : ${books[index].origin} Boarding : ${books[index].boardDate} ${books[index].boardTime}` ;
    
    const detailsDestination = document.createElement("p") ; 
    detailsDestination.innerText = `Destination : ${books[index].destination} Boarding : ${books[index].arrivalDate} ${books[index].arrivalTime}` ;

    const detailspass = document.createElement("p") ;
    detailspass.innerText = `No. of passengers : ${books[index].noSeat}`

    const img = document.createElement("img") ; 
    img.src = books[index].destUrl ;

    const datadiv = document.createElement("div") ;
    datadiv.appendChild(detailsOrigin) ; 
    datadiv.appendChild(detailsDestination) ;
    datadiv.appendChild(detailspass) ;


    
    const d = document.createElement("div") ; 
    d.appendChild(img) ; 
    d.appendChild(datadiv) ; 

    d.style.display = "flex" ;
    d.style.margin = "10px"
    d.style.border = "2px inset black"

    datadiv.style.marginLeft = "5px"

    mybook.appendChild(d);
}