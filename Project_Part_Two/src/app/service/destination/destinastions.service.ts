import { Injectable } from '@angular/core';
import { destination } from '../../model/destination';

@Injectable({
  providedIn: 'root'
})
export class DestinastionsService {

      private destinations = [
        new destination ("KRK", "Krakow", "John Paul II International Airport", "https://www.krakowairport.pl/", "https://www.gotravel.co.il/userfiles/_big_5697A25AD12034304C7A02DE637217A8.png"),
        new destination ("ZRH", "Zurich", "Zurich Airport", "https://www.flughafen-zuerich.ch/en", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT2BzoMCWETyqHPHEhqC3tbszeXIKKESzuLA&s"),
        new destination ("LHR", "London", "London Heathrow Airport", "https://www.heathrow.com/", "https://media.istockphoto.com/id/1347665170/photo/london-at-sunset.jpg?s=612x612&w=0&k=20&c=MdiIzSNKvP8Ct6fdgdV3J4FVcfsfzQjMb6swe2ybY6I="),
        new destination ("CDG", "Paris", "Charles de Gaulle Airport", "https://www.parisaeroport.fr/en", "https://media.gettyimages.com/id/1492597085/photo/paris-skyline-with-eiffel-tower-on-a-sunny-day-wide-angle-view-france.jpg?s=612x612&w=gi&k=20&c=IqPxTHAULIOeH7F82Vusgi2tsyFitg4VrXOyDajEZks="),
        new destination ("HND", "Tokyo", "Tokyo Haneda Airport", "https://tokyo-haneda.com/en/", "https://t3.ftcdn.net/jpg/02/65/23/70/360_F_265237090_Muthvb72m2POYFjyx7F5UCQLh9JdBtKN.jpg"),
        new destination ("LAX", "Los Angeles", "Los Angeles International Airport", "https://www.flylax.com/", "https://a.travel-assets.com/findyours-php/viewfinder/images/res40/475000/475457-Los-Angeles.jpg")
      ];

  constructor() { }

    list() {
      return this.destinations;
    }

    get(code: string) : destination | undefined {
      return this.destinations.find(destination => destination.code === code);
    }
    delete(code: string): void {
      // סינון המערך ומחיקת היעד עם הקוד המתאים
      this.destinations = this.destinations.filter(destination => destination.code !== code);
    }
}
