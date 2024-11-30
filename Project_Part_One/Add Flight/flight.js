class Flgt {
    constructor(flightNum, Origin, Destation, BoardDate, BoardTime, ArrivalDate, ArrivalTime, NoSeat) {
        this.flightNum = flightNum;
        this.Origin = Origin;
        this.Destation = Destation;
        this.BoardDate = BoardDate;
        this.BoardTime = BoardTime;
        this.ArrivalDate = ArrivalDate;
        this.ArrivalTime = ArrivalTime;
        this.NoSeat = NoSeat;
    }

    // Function to reset form fields
    static resetFields() {
        document.getElementById("flightNum").value = '';
        document.getElementById("Origin").value = '';
        document.getElementById("Destation").value = '';
        document.getElementById("BoardDate").value = '';
        document.getElementById("BoardTime").value = '';
        document.getElementById("ArrivalDate").value = '';
        document.getElementById("ArrivalTime").value = '';
        document.getElementById("NoSeat").value = '';
    }

    validate() {
        // Check if any of the fields are empty
        if (!this.flightNum || this.flightNum.trim().length === 0 ||
            !this.Origin || this.Origin.trim().length === 0 ||
            !this.Destation || this.Destation.trim().length === 0 ||
            !this.BoardDate || this.BoardDate.trim().length === 0 ||
            !this.BoardTime || this.BoardTime.trim().length === 0 ||
            !this.ArrivalDate || this.ArrivalDate.trim().length === 0 ||
            !this.ArrivalTime || this.ArrivalTime.trim().length === 0 ||
            !this.NoSeat || this.NoSeat.trim().length === 0) {
            alert("Error!");
            Flgt.resetFields(); // Reset fields in case of error
            return false;
        }

        // Validate dates
        const today = new Date(); // Current date
        const boardDateObj = new Date(this.BoardDate);
        const arrivalDateObj = new Date(this.ArrivalDate);

        // Check if the dates are invalid
        if (isNaN(boardDateObj.getTime()) || isNaN(arrivalDateObj.getTime())) {
            alert("Error!");
            Flgt.resetFields(); // Reset fields in case of error
            return false;
        }

        // Check if boarding date is in the past
        if (boardDateObj < today) {
            alert("Error!");
            Flgt.resetFields(); // Reset fields in case of error
            return false;
        }

        // Check if arrival date is after boarding date
        if (boardDateObj >= arrivalDateObj) {
            alert("Error!");
            Flgt.resetFields(); // Reset fields in case of error
            return false;
        }

        // Check if the flight number already exists
        for (const f of Flgts) {
            if (f.flightNum === this.flightNum) {
                alert("Error!");
                Flgt.resetFields(); // Reset fields in case of error
                return false;
            }
        }

        return true; // Validation passed
    }

    // Function to format flight details for display
    print() {
        return `Flight Number: ${this.flightNum}, Origin: ${this.Origin}, Destination: ${this.Destation}, Boarding Date: ${this.BoardDate}, Boarding Time: ${this.BoardTime}, Arrival Date: ${this.ArrivalDate}, Arrival Time: ${this.ArrivalTime}, Seats: ${this.NoSeat}`;
    }
}

// Array to store flight details
const Flgts = [
    new Flgt(1, "New York", "London", "2024-12-01", "13:01", "2024-12-02", "14:02", 50),
    new Flgt(2, "San Francisco", "Tokyo", "2024-12-03", "15:03", "2024-12-04", "16:04", 100)
];

// Function to handle form submission
function save(event) {
    event.preventDefault(); // Prevent page refresh

    // Retrieve form data
    const f = new Flgt(
        event.srcElement.elements.flightNum.value.trim(),
        event.srcElement.elements.Origin.value.trim(),
        event.srcElement.elements.Destation.value.trim(),
        event.srcElement.elements.BoardDate.value.trim(),
        event.srcElement.elements.BoardTime.value.trim(),
        event.srcElement.elements.ArrivalDate.value.trim(),
        event.srcElement.elements.ArrivalTime.value.trim(),
        event.srcElement.elements.NoSeat.value.trim()
    );

    // Validate the data and save if valid
    if (f.validate()) {
        Flgts.push(f); // Add the flight to the list
        alert(f.print());
        console.log(Flgts);

        // Reset fields after successful save
        Flgt.resetFields();
    }
}
