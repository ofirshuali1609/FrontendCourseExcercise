import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UpcomingOrderComponent } from "../upcoming-order/upcoming-order.component";
import { PreviousOrderComponent } from "../previous-order/previous-order.component";

@Component({
  selector: 'app-my-bookings',
  imports: [ RouterModule, UpcomingOrderComponent, PreviousOrderComponent ],
  templateUrl: './my-bookings.component.html',
  styleUrl: './my-bookings.component.css'
})
export class MyBookingsComponent {

  constructor() { }

}

