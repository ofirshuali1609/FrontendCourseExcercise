import { CommonModule } from '@angular/common';
import { Component, input, OnInit, ViewChild } from '@angular/core';
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
import { FlightsService } from '../../service/flights/flights.service';
import { Flight } from '../../model/flight';

@Component({
  selector: 'app-manage-flights',
  imports: [MatCardModule, MatButtonModule,MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatDividerModule, MatIconModule, CommonModule, RouterModule],
  templateUrl: './manage-flights.component.html',
  styleUrl: './manage-flights.component.css'
})
export class ManageFlightsComponent implements OnInit {

  flights : Flight[] = [];
  dataSource!: MatTableDataSource<Flight>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private flightService: FlightsService) {
  }
  ngOnInit(): void {
    this.flightService.list().then((flights) => {
      this.flights = flights;
      this.dataSource = new MatTableDataSource(this.flights);
      this.dataSource.paginator = this.paginator; 
      this.dataSource.sort = this.sort;
    });
  }

    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }

    deleteFlight(flightNo: string): void {
      this.flights = this.flights.filter(flight => flight.flightNo !== flightNo);
      this.dataSource = new MatTableDataSource(this.flights);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.flightService.delete(flightNo);
    }

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
}



