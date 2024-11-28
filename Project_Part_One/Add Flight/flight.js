
class Flgt {

    constructor(flightNum, Origin, Destation, BoardDate, BoardTime, ArrivalDate, ArrivalTime, NoSeat ) {
        this.flightNum = flightNum;
        this.Origin = Origin;
        this.Destation = Destation;
        this.BoardDate = BoardDate;
        this.BoardTime = BoardTime;
        this.ArrivalDate = ArrivalDate;
        this.ArrivalTime = ArrivalTime;
        this.NoSeat = NoSeat;


    }

    validate() { 
       if (this.flightNum.length == 0  || this.Origin.length == 0 || this.Destation.length == 0 || this.NoSeat.length == 0 || this.BoardTime.length == 0 || this.ArrivalTime.length == 0 ) { 
        alert("error")
        return false 
       }

       if(this.BoardDate == 0 && this.ArrivalDate.length == 0 || this.BoardDate > this.ArrivalDate )  { 
        alert("error")
        return false 
       }

       for (const f of Flgts ) { 
        if ( d.flightNum == this.flightNum || d.Origin == this.Origin || d.Destation == this.Destation ) { 
            alert("error")
            return false 
        }               
       }
       return true 
    }

    print() {
         return `${flightNum} ${Origin} ${Destation} ${BoardDate} ${BoardTime} ${ArrivalDate} ${ArrivalTime} ${NoSeat}`
    }

}

const Flgts = [new Flgt(1, "yuval", "madari", "1/12/2024","01:01 PM", "2/12/204", "02:02 PM", 1) , new Flgt(2, "hadar", "binyamin", "3/12/2024","03:03 PM", "4/12/204", "04:04 PM", 2)]



function save(event) {
    event.preventDefault()
    console.log(event)
    const f = new Flgt(event.srcElement.elements.flightNum.value , event.srcElement.elements.Origin.value ,event.srcElement.elements.Destation.value , event.srcElement.elements.BoardDate.value,event.srcElement.elements.BoardTime.value ,event.srcElement.elements.destCode.value ,event.srcElement.elements.destName.value ,event.srcElement.elements.ArrivalDate.value ,event.srcElement.elements.ArrivalTime.value ,event.srcElement.elements.NoSeat.value)
    if (f.validate()) { 
        Flgts.push(f)
        alert(f.print())
        console.log(Dests);
        
        event.srcElement.elements.flightNum.value = ''
        event.srcElement.elements.Origin.value = ''
        event.srcElement.elements.Destation.value = ''
        event.srcElement.elements.BoardDate.value =''
        event.srcElement.elements.BoardTime.value =''      
        event.srcElement.elements.destCode.value = ''
        event.srcElement.elements.destName.value = ''
        event.srcElement.elements.ArrivalDate.value = ''
        event.srcElement.elements.ArrivalTime.value =''
        event.srcElement.elements.NoSeat.value =''
    }
}



this.flightNum = document.getElementById("flightNum");
this.Origin = document.getElementById("Origin");
this.Destation = document.getElementById("Destation");
this.BoardDate = document.getElementById("BoardDate");
this.BoardTime = document.getElementById("BoardTime");
this.ArrivalDate = document.getElementById("ArrivalDate");
this.ArrivalTime = document.getElementById("ArrivalTime");
this.NoSeat = document.getElementById("NoSeat");
