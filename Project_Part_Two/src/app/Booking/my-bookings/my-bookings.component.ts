import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BookingsService } from '../../service/booking/booking.service';
import { from, Observable } from "rxjs";
import { booking } from "../../model/booking";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from "@angular/material/table";

@Component({
  selector: 'app-my-bookings',
  imports: [MatTableModule, RouterModule, MatButtonModule, MatIconModule, RouterModule],
  templateUrl: './my-bookings.component.html',
  styleUrl: './my-bookings.component.css'
})
export class MyBookingsComponent {

  constructor() { }

  bookings_service = inject(BookingsService);
  displayedColumns: string[] = ["destination_image", "flight_details"];
  bookings: Observable<booking[]> = from(this.bookings_service.list());
}

