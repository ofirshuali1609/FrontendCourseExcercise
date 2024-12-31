import { Component } from '@angular/core';
import { BookingService } from '../service/booking/booking.service';
import { booking } from '../model/booking';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-upcoming-order',
  imports: [MatCardModule, MatButtonModule,RouterModule],
  templateUrl: './upcoming-order.component.html',
  styleUrl: './upcoming-order.component.css'
})
export class UpcomingOrderComponent {
  bookings !: booking[];

  constructor(private bookingService: BookingService) { } 
  ngOnInit(): void {
    this.bookings = this.bookingService.list();
    }
}

