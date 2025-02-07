import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit, ViewChild } from '@angular/core';
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
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../dialog/dialog.component';

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
    RouterModule,
    MatButtonModule
  ],
  templateUrl: './manage-destinations.component.html',
  styleUrl: './manage-destinations.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ManageDestinationsComponent implements OnInit {

  readonly dialog = inject(MatDialog);

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

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
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
     this.dataSource.sort = this.sort;
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