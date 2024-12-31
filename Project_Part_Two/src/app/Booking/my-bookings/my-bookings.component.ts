import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { UpcomingOrderComponent } from "../../upcoming-order/upcoming-order.component";

@Component({
  selector: 'app-my-bookings',
  imports: [MatCardModule, UpcomingOrderComponent],
  templateUrl: './my-bookings.component.html',
  styleUrl: './my-bookings.component.css'
})
export class MyBookingsComponent {

}
