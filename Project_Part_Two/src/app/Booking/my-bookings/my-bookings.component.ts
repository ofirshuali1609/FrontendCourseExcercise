import { Component } from '@angular/core';
import { UpcomingOrderComponent } from "../../upcoming-order/upcoming-order.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-my-bookings',
  imports: [UpcomingOrderComponent,RouterModule],
  templateUrl: './my-bookings.component.html',
  styleUrl: './my-bookings.component.css'
})
export class MyBookingsComponent {

}
