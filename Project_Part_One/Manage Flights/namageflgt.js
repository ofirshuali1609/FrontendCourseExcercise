function showFlgt() { 
    const ManageTable = document.getElementById("ManageTable")
    for (const f of Flgts) { 
        const tr = document.createElement("tr")
        const flightNum = document.createElement("td")
        flightNum.innerText = f.flightNum

        const Origin = document.createElement("td")
        Origin.innerText = f.Origin

        const Destation = document.createElement("td")
        Destation.innerText = f.Destation

        const BoardDate = document.createElement("td")
        BoardDate.innerText = f.BoardDate

        const BoardTime = document.createElement("td")
        BoardTime.innerText = f.BoardTime

        const ArrivalDate = document.createElement("td")
        ArrivalDate.innerText = f.ArrivalDate

        const ArrivalTime = document.createElement("td")
        ArrivalTime.innerText = f.ArrivalTime

        const NoSeat = document.createElement("td")
        NoSeat.innerText = f.NoSeat

        tr.appendChild(flightNum)
        tr.appendChild(Origin)
        tr.appendChild(Destation)
        tr.appendChild(BoardDate)
        tr.appendChild(BoardTime)
        tr.appendChild(ArrivalDate)
        tr.appendChild(ArrivalTime)
        tr.appendChild(NoSeat)
        ManageTable.appendChild(tr)
    }
}