import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ManageFlightsComponent } from './flights/manage-flights/manage-flights.component';
import { ManageDestinationsComponent } from './destinations/manage-destinations/manage-destinations.component';
import { FlightSearchComponent } from './flights/flight-search/flight-search.component';
import { MyBookingsComponent } from './Booking/my-bookings/my-bookings.component';
import { HelpPageComponent } from './help-page/help-page.component';
import { BookFlightComponent } from './Booking/book-flight/book-flight.component';
import { ShowFlightComponent } from './flights/show-flight/show-flight.component';
import { ShowDestinationComponent } from './destinations/show-destination/show-destination.component';
import { LastMinuteFlightComponent } from './last-minute-flight/last-minute-flight.component';
import { ShowBookingComponent } from './Booking/show-booking/show-booking.component';


export const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'help', component: HelpPageComponent },
    { path: 'manageFlights', component: ManageFlightsComponent },
    { path: 'manageDestinations', component: ManageDestinationsComponent },
    { path: 'flightSearch', component: FlightSearchComponent },
    { path: 'myBookings', component: MyBookingsComponent },
    { path: 'bookFlight/:flightNo', component: BookFlightComponent },
    { path: 'showFlight', component: ShowFlightComponent },
    { path: 'showDestination/:code', component: ShowDestinationComponent },
    { path: 'bookFlight/:flightNo', component: LastMinuteFlightComponent },
    { path: 'showBooking/:flightNo', component: ShowBookingComponent },
];
