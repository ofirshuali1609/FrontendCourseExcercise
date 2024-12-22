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

    mybook.appendChild(d);

// i want to see that we have an option to do style from here 


d.style.display = "flex";
d.style.margin = "10px";
d.style.gap = "10px"; 
d.style.padding = "10px"; 
d.style.backgroundColor = "#f9f9f9"; 

datadiv.style.marginLeft = "5px";
datadiv.style.padding = "5px";
datadiv.style.backgroundColor = "#fff"; 
datadiv.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
datadiv.style.fontSize = "16px"; 

// Style for images inside `d` to make them larger
const images = d.querySelectorAll("img");
images.forEach((img) => {
    img.style.width = "200px"; 
    img.style.height = "auto"; 
    img.style.borderRadius = "8px";
    img.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)"; 
});
}