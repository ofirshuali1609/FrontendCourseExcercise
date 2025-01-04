import { Injectable } from '@angular/core';
import { FlightsService } from '../flights/flights.service';
import { DestinastionsService } from '../destination/destinastions.service';
import { booking } from '../../model/booking';
import { Flight } from '../../model/flight';
import { Passenger } from '../../model/passenger';


@Injectable({
  providedIn: 'root'
})
export class BookingService {

  flights !: Flight[] ;


  private bookings = [

    new booking (this.flights[0], new Passenger(7, "cristiano ronaldo", 839746292)),
    new booking (this.flights[1], new Passenger(10, "lionel messi", 739746291)),

  ]

  constructor(private destinationService: DestinastionsService, private flightService: FlightsService) { }

  ngOnInit(): void {
    this.flights = this.flightService.list();  }

  list() {
    return this.bookings;
  }

  get(flightNo: string): booking | undefined {
    return this.bookings.find(p => p.flight.flightNo == flightNo);
  }
}
