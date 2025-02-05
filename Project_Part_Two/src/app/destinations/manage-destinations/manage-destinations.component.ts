import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { DestinationsService } from '../../service/destination/destinations.service';
import { destination } from '../../model/destination';

@Component({
  selector: 'app-manage-destinations',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDividerModule,
    MatIconModule,
    CommonModule,
    RouterModule
  ],
  templateUrl: './manage-destinations.component.html',
  styleUrl: './manage-destinations.component.css'
})
export class ManageDestinationsComponent implements OnInit {

  destinations: destination[] = [];
  dataSource!: MatTableDataSource<destination>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private destinationsService: DestinationsService) {}

  ngOnInit(): void {
    this.destinationsService.list().then((destinations) => {
      this.destinations = destinations;
      this.dataSource = new MatTableDataSource(this.destinations);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }).catch(error => console.error("Error fetching destinations:", error));
  }

  ngAfterViewInit() {
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  deleteDestination(code: string): void {
    this.destinations = this.destinations.filter(destination => destination.code !== code);
    this.dataSource = new MatTableDataSource(this.destinations);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.destinationsService.delete(code);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
