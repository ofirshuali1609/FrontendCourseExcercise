import { Passenger } from './../model/passenger';
import { Component, Input } from '@angular/core';
import { ShowBookingComponent } from "../Booking/show-booking/show-booking.component";
import { FlightsService } from '../service/flights/flights.service';

@Component({
  selector: 'app-view-flight',
  imports: [ShowBookingComponent],
  templateUrl: './view-flight.component.html',
  styleUrl: './view-flight.component.css'
})
export class ViewFlightComponent {
  @Input() flightNo ='0';
  @Input() Passengers: Passenger[] = [];

  constructor(private flightService: FlightsService) {
  }
  
}
