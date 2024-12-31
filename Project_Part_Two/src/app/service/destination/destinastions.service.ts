import { Injectable } from '@angular/core';
import { destination } from '../../model/destination';

@Injectable({
  providedIn: 'root'
})
export class DestinastionsService {

      private destinations = [
        new destination ("KRK", "Krakow", "John Paul II International Airport", "https://www.krakowairport.pl/", "https://example.com/krakow.jpg"),
        new destination ("ZRH", "Zurich", "Zurich Airport", "https://www.flughafen-zuerich.ch/en", "https://example.com/zurich.jpg"),
        new destination ("LHR", "London", "London Heathrow Airport", "https://www.heathrow.com/", "https://example.com/london.jpg"),
        new destination ("CDG", "Paris", "Charles de Gaulle Airport", "https://www.parisaeroport.fr/en", "https://example.com/paris.jpg"),
        new destination ("HND", "Tokyo", "Tokyo Haneda Airport", "https://www.haneda-airport.jp/en/", "https://example.com/tokyo.jpg"),
        new destination ("LAX", "Los Angeles", "Los Angeles International Airport", "https://www.flylax.com/", "https://example.com/losangeles.jpg")
      ];

  constructor() { }

    list() { 
      return this.destinations;
    }
  
    get(code: string) : destination | undefined {
      return this.destinations.find(destination => destination.code === code);
    }
}
