import { CommonModule } from '@angular/common';
import { Component, input, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Router, RouterModule } from '@angular/router';

export interface FlightData {
  flightNo: string;
  origin: string;
  destination: string;
  boradingDate: Date;
  bordingTime: string;
  arrivalDate: Date;
  arrivalTime: string;
  numberOfSeats: number;
  imageUrl: string; // כתובת URL לתמונה של המדינה
}


@Component({
  selector: 'app-home-page',
  imports: [MatCardModule, MatButtonModule,MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatDividerModule, MatIconModule, CommonModule, RouterModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})

export class HomePageComponent {

  public FLIGHTS: FlightData[] = [
    {
      flightNo: 'W61283',
      origin: 'Tel Aviv',
      destination: 'Krakow',
      boradingDate: new Date('2024-12-27'),
      bordingTime: '10:30',
      arrivalDate: new Date('2024-01-10'),
      arrivalTime: '14:00',
      numberOfSeats: 180,
      imageUrl: 'https://www.gotravel.co.il/userfiles/_big_5697A25AD12034304C7A02DE637217A8.png'
    },
    {
      flightNo: 'LX8396',
      origin: 'Larnaca',
      destination: 'Zurich',
      boradingDate: new Date('2024-02-15'),
      bordingTime: '12:45',
      arrivalDate: new Date('2024-02-15'),
      arrivalTime: '17:00',
      numberOfSeats: 150,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT2BzoMCWETyqHPHEhqC3tbszeXIKKESzuLA&s'
    },
    {
      flightNo: 'AA101',
      origin: 'New York',
      destination: 'London',
      boradingDate: new Date('2024-03-20'),
      bordingTime: '16:00',
      arrivalDate: new Date('2024-03-21'),
      arrivalTime: '06:30',
      numberOfSeats: 250,
      imageUrl: 'https://media.istockphoto.com/id/1347665170/photo/london-at-sunset.jpg?s=612x612&w=0&k=20&c=MdiIzSNKvP8Ct6fdgdV3J4FVcfsfzQjMb6swe2ybY6I='
    },
    {
      flightNo: 'BA202',
      origin: 'Berlin',
      destination: 'Paris',
      boradingDate: new Date('2024-04-05'),
      bordingTime: '09:00',
      arrivalDate: new Date('2024-04-05'),
      arrivalTime: '11:15',
      numberOfSeats: 200,
      imageUrl: 'https://media.gettyimages.com/id/1492597085/photo/paris-skyline-with-eiffel-tower-on-a-sunny-day-wide-angle-view-france.jpg?s=612x612&w=gi&k=20&c=IqPxTHAULIOeH7F82Vusgi2tsyFitg4VrXOyDajEZks='
    },
    {
      flightNo: 'CA303',
      origin: 'Moscow',
      destination: 'Tokyo',
      boradingDate: new Date('2024-05-10'),
      bordingTime: '22:00',
      arrivalDate: new Date('2024-05-11'),
      arrivalTime: '13:00',
      numberOfSeats: 300,
      imageUrl: 'https://t3.ftcdn.net/jpg/02/65/23/70/360_F_265237090_Muthvb72m2POYFjyx7F5UCQLh9JdBtKN.jpg'
    },
    {
      flightNo: 'DA404',
      origin: 'Sydney',
      destination: 'Los Angeles',
      boradingDate: new Date('2024-06-01'),
      bordingTime: '20:00',
      arrivalDate: new Date('2024-06-01'),
      arrivalTime: '15:30',
      numberOfSeats: 220,
      imageUrl: 'https://a.travel-assets.com/findyours-php/viewfinder/images/res40/475000/475457-Los-Angeles.jpg'
    }
  ];



editFlight(_t72: any) {
throw new Error('Method not implemented.');
}
displayedColumns: string[] = [
  'image',
  'flightNo',
  'origin',
  'destination',
  'boradingDate',
  'bordingTime',
  'arrivalDate',
  'arrivalTime',
  'numberOfSeats',
  'actions'
];
  dataSource: MatTableDataSource<FlightData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private router: Router) {
    this.dataSource = new MatTableDataSource(this.FLIGHTS);
  }


  bookFlight(row: any) {
    this.router.navigate(['/bookFlight'], { queryParams: { flightNo: row.flightNo } });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  hasFlightInNextWeek(flightDate: FlightData["boradingDate"]): boolean {
    const today = new Date();
    const nextWeek = new Date();
    nextWeek.setDate(today.getDate() + 7);

    // בדיקה אם תאריך הטיסה נמצא בטווח השבוע הקרוב
    return flightDate >= today && flightDate <= nextWeek;
  }
}
