import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SearchFlightsComponent } from '../search-flights/search-flights.component';
import { LastMinuteFlightComponent } from '../last-minute-flight/last-minute-flight.component';



@Component({
  selector: 'app-home-page',
  imports: [RouterModule,SearchFlightsComponent,LastMinuteFlightComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})

export class HomePageComponent {

}
