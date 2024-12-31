import { Component, OnInit } from '@angular/core';
import { booking } from '../model/booking';
import { BookingService } from '../service/booking/booking.service';

@Component({
  selector: 'app-order',
  imports: [],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit {

  bookings !: booking[];

  constructor(private bookingService: BookingService) { } 
  ngOnInit(): void {
    this.bookings = this.bookingService.list();
    }

}
