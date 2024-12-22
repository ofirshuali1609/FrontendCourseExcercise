function showDest() { 
    const ManageTable = document.getElementById("ManageTable")
    for (const d of Dests) { 
        const tr = document.createElement("tr")
        const destCode = document.createElement("td")
        destCode.innerText = d.destCode
        const destName = document.createElement("td")
        destName.innerText = d.destName
        const airportName = document.createElement("td")
        airportName.innerText = d.airportName
        const airportUrl = document.createElement("td")
        airportUrl.innerText = d.airportUrl
        const imgUrl = document.createElement("td")
        imgUrl.innerText = d.imgUrl

        tr.appendChild(destCode)
        tr.appendChild(destName)
        tr.appendChild(airportName)
        tr.appendChild(airportUrl)
        tr.appendChild(imgUrl)
        ManageTable.appendChild(tr)
    }
}