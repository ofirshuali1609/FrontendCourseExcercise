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
import {  RouterModule } from '@angular/router';
import { destination } from '../../model/destination';
import { DestinastionsService } from '../../service/destination/destinastions.service';

@Component({
  selector: 'app-manage-destinations',
  imports: [MatCardModule, MatButtonModule,MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatDividerModule, MatIconModule, CommonModule, RouterModule, ],
  templateUrl: './manage-destinations.component.html',
  styleUrl: './manage-destinations.component.css'
})
export class ManageDestinationsComponent {
  destinations : destination[] = [];
  dataSource!: MatTableDataSource<destination>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private destinationService: DestinastionsService) {
  }
  ngOnInit(): void {
    this.destinations = this.destinationService.list();
    this.dataSource = new MatTableDataSource(this.destinations);
  }

  deleteDestination(code: string): void {

    this.destinations = this.destinations.filter(destination => destination.code !== code);

    // Update the dataSource
    this.dataSource = new MatTableDataSource(this.destinations);

    // Reassign the paginator and sorter to the dataSource
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.destinationService.delete(code);
}



    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
}
