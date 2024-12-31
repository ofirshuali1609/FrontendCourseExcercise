import { Injectable } from '@angular/core';
import { Flight } from '../../model/flight';


@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  private flights = [
    new Flight('W61283','Tel Aviv','Krakow',new Date('2024-12-27'),
    '10:30',new Date('2024-01-10'),'14:00',180, 'https://www.gotravel.co.il/userfiles/_big_5697A25AD12034304C7A02DE637217A8.png'), 
    new Flight('LX8396','Larnaca','Zurich',new Date('2024-02-15'),
    '12:45',new Date('2024-02-15'),'17:00',150,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT2BzoMCWETyqHPHEhqC3tbszeXIKKESzuLA&s'),
    new Flight('AA101','New York','London',new Date('2024-03-20'),
    '16:00',new Date('2024-03-21'),'06:30',
    250,'https://media.istockphoto.com/id/1347665170/photo/london-at-sunset.jpg?s=612x612&w=0&k=20&c=MdiIzSNKvP8Ct6fdgdV3J4FVcfsfzQjMb6swe2ybY6I='),
    new Flight('BA202','Berlin','Paris',new Date('2024-04-05'),
    '09:00',new Date('2024-04-05'),'11:15',
    200,'https://media.gettyimages.com/id/1492597085/photo/paris-skyline-with-eiffel-tower-on-a-sunny-day-wide-angle-view-france.jpg?s=612x612&w=gi&k=20&c=IqPxTHAULIOeH7F82Vusgi2tsyFitg4VrXOyDajEZks='),
    new Flight('CA303','Moscow','Tokyo',new Date('2024-05-10'),
     '22:00',new Date('2024-05-11'),'13:00',
     300,'https://t3.ftcdn.net/jpg/02/65/23/70/360_F_265237090_Muthvb72m2POYFjyx7F5UCQLh9JdBtKN.jpg'),
    new Flight('DA404','Sydney','Los Angeles',new Date('2024-06-01'),
    '20:00',new Date('2024-06-01'),'15:30',
    220,'https://a.travel-assets.com/findyours-php/viewfinder/images/res40/475000/475457-Los-Angeles.jpg'),
    ]

  constructor() { }

  list() { 
    return this.flights;
  }

  get(flightNo: string) : Flight | undefined {
    return this.flights.find(flight => flight.flightNo === flightNo);
  }
}
