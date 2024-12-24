import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';

export interface FlightData {
  flightNo: string;
  origin: string;
  destination: string;
  imageUrl: string; // כתובת URL לתמונה של המדינה
}

const FLIGHTS: FlightData[] = [
  { flightNo: 'W61283', origin: 'Tel Aviv', destination: 'Krakow', imageUrl: 'https://www.gotravel.co.il/userfiles/_big_5697A25AD12034304C7A02DE637217A8.png' },
  { flightNo: 'LX8396', origin: 'Larnaca', destination: 'Zurich', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT2BzoMCWETyqHPHEhqC3tbszeXIKKESzuLA&s' },
  { flightNo: 'AA101', origin: 'New York', destination: 'London', imageUrl: 'https://media.istockphoto.com/id/1347665170/photo/london-at-sunset.jpg?s=612x612&w=0&k=20&c=MdiIzSNKvP8Ct6fdgdV3J4FVcfsfzQjMb6swe2ybY6I=' },
  { flightNo: 'BA202', origin: 'Berlin', destination: 'Paris', imageUrl: 'https://media.gettyimages.com/id/1492597085/photo/paris-skyline-with-eiffel-tower-on-a-sunny-day-wide-angle-view-france.jpg?s=612x612&w=gi&k=20&c=IqPxTHAULIOeH7F82Vusgi2tsyFitg4VrXOyDajEZks=' },
  { flightNo: 'CA303', origin: 'Moscow', destination: 'Tokyo', imageUrl: 'https://t3.ftcdn.net/jpg/02/65/23/70/360_F_265237090_Muthvb72m2POYFjyx7F5UCQLh9JdBtKN.jpg' },
  { flightNo: 'DA404', origin: 'Sydney', destination: 'Los Angeles', imageUrl: 'https://a.travel-assets.com/findyours-php/viewfinder/images/res40/475000/475457-Los-Angeles.jpg' },
];

@Component({
  selector: 'app-home-page',
  imports: [MatCardModule, MatButtonModule,MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatDividerModule, MatIconModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})

export class HomePageComponent {
editFlight(_t72: any) {
throw new Error('Method not implemented.');
}
  displayedColumns: string[] = ['image', 'flightNo', 'origin', 'destination', 'actions'];
  dataSource: MatTableDataSource<FlightData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private router: Router) {
    this.dataSource = new MatTableDataSource(FLIGHTS);
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
}


/*
export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}

/* Constants used to fill up our data base.
const FRUITS: string[] = [
  'blueberry',
  'lychee',
  'kiwi',
  'mango',
  'peach',
  'lime',
  'pomegranate',
  'pineapple',
];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];

@Component({
  selector: 'app-home-page',
  imports: [MatCardModule, MatButtonModule,MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatDividerModule, MatIconModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  displayedColumns: string[] = ['id', 'name', 'progress', 'fruit'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor() {
    // Create 100 users
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
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
}

/** Builds and returns a new User.
function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
  };
}
*/
