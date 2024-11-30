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

let table = document.getElementById("org") ; 
table.innerText = "hee" ;


// Example: Display the details in the page (you can display them in specific elements or use them in forms)
document.getElementById("flightNumDisplay").innerText = flightNum;
document.getElementById("originDisplay").innerText = origin;
document.getElementById("destinationDisplay").innerText = destination;
document.getElementById("boardDateDisplay").innerText = boardDate;
document.getElementById("boardTimeDisplay").innerText = boardTime;
document.getElementById("arrivalDateDisplay").innerText = arrivalDate;
document.getElementById("arrivalTimeDisplay").innerText = arrivalTime;
document.getElementById("noSeatDisplay").innerText = noSeat;

// Optionally log the data for debugging
console.log(flightNum, origin, destination, boardDate, boardTime, arrivalDate, arrivalTime, noSeat);
