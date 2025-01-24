import { Injectable } from '@angular/core';
import { FlightsService } from '../flights/flights.service';
import { DestinastionsService } from '../destination/destinastions.service'; // Ensure you need this
import { booking } from '../../model/booking';
import { Flight } from '../../model/flight';
import { Passenger } from '../../model/passenger';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  flights: Flight[] = [];
  bookings: booking[] = [];

  constructor(
    private destinationService: DestinastionsService, 
    private flightService: FlightsService
  ) {
    this.initializeBookings();
  }

  // Initialize bookings in the constructor
  initializeBookings(): void {
    this.flights = this.flightService.list(); // Make sure list() returns the flights correctly
    this.bookings = [
      new booking(this.flights[0], new Passenger(7, "Cristiano Ronaldo", 839746292)),
      new booking(this.flights[1], new Passenger(10, "Lionel Messi", 739746291)),
    ];
  }

  // List all bookings
  list(): booking[] {
    return this.bookings;
  }

  // Get a booking by flight number
  get(flightNo: string): booking | undefined {
    return this.bookings.find(p => p.flight.flightNo === flightNo);
  }
}
