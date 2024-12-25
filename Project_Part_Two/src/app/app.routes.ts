import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ManageFlightsComponent } from './flights/manage-flights/manage-flights.component';
import { ManageDestinationsComponent } from './destinations/manage-destinations/manage-destinations.component';
import { FlightSearchComponent } from './flights/flight-search/flight-search.component';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { HelpPageComponent } from './help-page/help-page.component';
import { BookFlightComponent } from './book-flight/book-flight.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'help', component: HelpPageComponent },
    { path: 'manageFlights', component: ManageFlightsComponent },
    { path: 'manageDestinations', component: ManageDestinationsComponent },
    { path: 'flightSearch', component: FlightSearchComponent },
    { path: 'myBookings', component: MyBookingsComponent },
    { path: 'bookFlight/:flightNo/:boradingDate/:bordingTime/:arrivalDate/:arrivalTime/:origin/:destination', component: BookFlightComponent },

];
