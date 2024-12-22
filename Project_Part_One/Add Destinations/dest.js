
class Dest {

    constructor(destCode, destName, airportName, airportUrl, imgUrl) {
        this.destCode = destCode;
        this.destName = destName;
        this.airportName = airportName;
        this.airportUrl = airportUrl;
        this.imgUrl = imgUrl;
    }

    validate() { 
       if (this.destCode.length == 0  || this.destName.length == 0 || this.airportName.length == 0 || this.airportUrl.length == 0 || this.imgUrl.length == 0) { 
        alert("error")
        return false 
       }

       for (const d of Dests ) { 
        if ( d.destCode == this.destCode || d.destName == this.destName ) { 
            alert("error")
            return false 
        }               
       }
       return true 
    }

    print() {
         return `${this.destCode} ${this.destName} ${this.airportName} ${this.airportUrl} ${this.imgUrl}`
    }

}

const Dests = [
    new Dest(1, "London", "London City", "https://www.londoncityairport.com/", "../pictures/London City.jpg"),
     new Dest(3, "Tokyo", 5, "https://www.narita-airport.jp/en/", "../pictures/Tokyo.jpg")
    ]



function save(event) {
    event.preventDefault()
    console.log(event)
    const d = new Dest(event.srcElement.elements.destCode.value, event.srcElement.elements.destName.value, event.srcElement.elements.airportName.value, event.srcElement.elements.airportUrl.value, event.srcElement.elements.imgUrl.value)
    if (d.validate()) { 
        Dests.push(d)
        alert(d.print())
        console.log(Dests);
        
        event.srcElement.elements.destCode.value = ''
        event.srcElement.elements.destName.value = ''
        event.srcElement.elements.airportName.value = ''
        event.srcElement.elements.airportUrl.value =''
        event.srcElement.elements.imgUrl.value =''
    }
}


const destCode  =  document.getElementById("destCode")
const destName  =  document.getElementById("destName")
const airportName  =  document.getElementById("airportName")
const airportUrl  =  document.getElementById("airportUrl")
const imgUrl  =  document.getElementById("imgUrl")