import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Flight } from '../../model/flight';
import { FlightsService } from '../../service/flights/flights.service';
import { BookingsService } from '../../service/booking/booking.service';
import { booking } from '../../model/booking';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-show-booking',
  imports: [MatCardModule, MatButtonModule, CommonModule],
  templateUrl: './show-booking.component.html',
  styleUrl: './show-booking.component.css'
})
export class ShowBookingComponent {
  @Input() flightNo ='0';
  booking !: booking | undefined;


    constructor(private flightService: FlightsService, private BookingsService: BookingsService) {
    }
    ngOnInit(): void {
        }
    }

