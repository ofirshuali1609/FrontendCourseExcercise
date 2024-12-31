import { Component } from '@angular/core';
import { booking } from '../model/booking';
import { BookingService } from '../service/booking/booking.service';

@Component({
  selector: 'app-previous-order',
  imports: [],
  templateUrl: './previous-order.component.html',
  styleUrl: './previous-order.component.css'
})
export class PreviousOrderComponent {
  bookings !: booking[];

  constructor(private bookingService: BookingService) { } 
  ngOnInit(): void {
    this.bookings = this.bookingService.list();
    }

}
