
// Function to populate the dropdowns for origin and destination
function populateFilters() {
    // Check if Flgts is properly loaded
    if (!Flgts || Flgts.length === 0) {
        console.error("Flgts array is not loaded properly.");
        return;
    }

    // Get unique origins and destinations from Flgts array
    const origins = [...new Set(Flgts.map(f => f.Origin))];  
    const destinations = [...new Set(Flgts.map(f => f.Destation))];  

    console.log("Origins:", origins);
    console.log("Destinations:", destinations);

    // Populate the Origin dropdown
    const originFilter = document.getElementById("originFilter");
    origins.forEach(origin => {
        const option = document.createElement("option");
        option.value = origin;
        option.innerText = origin;
        originFilter.appendChild(option);
    });

    // Populate the Destination dropdown
    const destinationFilter = document.getElementById("destinationFilter");
    destinations.forEach(destination => {
        const option = document.createElement("option");
        option.value = destination;
        option.innerText = destination;
        destinationFilter.appendChild(option);
    });
}

// Function to display flights in the table
function displayFlights(flights) {
    const flightTableBody = document.getElementById("flightTableBody");
    flightTableBody.innerHTML = ""; 

    flights.forEach(f => {
        const row = document.createElement("tr");

        // Create table cells for each flight detail
        Object.values(f).forEach(value => {
            const cell = document.createElement("td");
            cell.innerText = value;
            row.appendChild(cell);
        });

        // Add an action button to each row (for example, a button to 'book' the flight)
        const actionCell = document.createElement("td");
        const actionButton = document.createElement("button");
        actionButton.innerText = "Book Now";
        actionButton.onclick = function() {
            const orderPageUrl = `../Order flights/Order flights.html?flightNum=${f.flightNum}&origin=${f.Origin}&destination=${f.Destation}&boardDate=${f.BoardDate}&boardTime=${f.BoardTime}&arrivalDate=${f.ArrivalDate}&arrivalTime=${f.ArrivalTime}&noSeat=${f.NoSeat}`;
            window.location.href = orderPageUrl;  
        };

        actionCell.appendChild(actionButton);
        row.appendChild(actionCell);

        flightTableBody.appendChild(row);
    });
}

// Function to filter flights based on origin and destination
function filterFlights() {
    const originFilter = document.getElementById("originFilter").value.toLowerCase();
    const destinationFilter = document.getElementById("destinationFilter").value.toLowerCase();

    const filteredFlights = Flgts.filter(f => {
        const matchesOrigin = f.Origin.toLowerCase().includes(originFilter);
        const matchesDestination = f.Destation.toLowerCase().includes(destinationFilter);

        return (originFilter === "" || matchesOrigin) && (destinationFilter === "" || matchesDestination);
    });

    displayFlights(filteredFlights);  
}

document.getElementById("originFilter").addEventListener("change", filterFlights);
document.getElementById("destinationFilter").addEventListener("change", filterFlights);

// Initially populate the filters and display all flights
window.onload = function() {
    // First, check if Flgts is defined before proceeding
    if (typeof Flgts !== 'undefined' && Flgts.length > 0) {
        populateFilters();
        displayFlights(Flgts); 
    } else {
        console.error("Flgts data is not available.");
    }
};

