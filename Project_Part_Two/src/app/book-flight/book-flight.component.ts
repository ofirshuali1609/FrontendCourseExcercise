import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-book-flight',
  imports: [],
  templateUrl: './book-flight.component.html',
  styleUrl: './book-flight.component.css'
})
export class BookFlightComponent {
  @Input() flightNo =0;
  @Input() boradingDate : Date = new Date();
  @Input() bordingTime =0;
  @Input() arrivalDate : Date = new Date();
  @Input() arrivalTime =0;
  @Input() origin =0;
  @Input() destination =0;


}
