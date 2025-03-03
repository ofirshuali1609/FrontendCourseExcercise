import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit, ViewChild } from '@angular/core';
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
import { FlightsService } from '../service/flights/flights.service';
import { Flight } from '../model/flight';
import { MatOption, MatSelect } from "@angular/material/select";
import { MatButtonToggle, MatButtonToggleGroup } from "@angular/material/button-toggle";
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { destination } from "../model/destination";
import { DestinationsService } from "../service/destination/destinations.service";
import { DatePickerComponent } from "../date-picker/date-picker.component";

@Component({
    selector: 'app-search-flights',
    imports: [MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatDividerModule, MatIconModule, CommonModule, RouterModule, MatSelect, MatOption, MatButtonToggleGroup, DatePickerComponent, MatButtonToggle, ReactiveFormsModule],
    templateUrl: './search-flights.component.html',
    styleUrl: './search-flights.component.css'
})
export class SearchFlightsComponent implements OnInit {

    @Input() defaultFilter = false;
    flights !: Flight[];
    dataSource!: MatTableDataSource<Flight>;
    filterForm!: FormGroup;
    destinations: destination[] = [];
    expandedMode: boolean = false;

    @ViewChild(DatePickerComponent) datePickerComponent!: DatePickerComponent;
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

    private fb = inject(FormBuilder);
    private destinationsService = inject(DestinationsService);

    constructor(private flightService: FlightsService) {
    }

    ngOnInit(): void {

        this.destinationsService.list().then((destinations) => {
            console.log(destinations);
            this.destinations = destinations;
        });

        this.filterForm = this.fb.group({
            origin: [null], destination: [null], startDate: [null], endDate: [null]
        });

        this.flightService.list().then((flights) => {
            this.flights = flights;
            this.dataSource = new MatTableDataSource(this.flights);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        });

        this.filterForm.valueChanges.subscribe(() => this.filterFlights());
    }

    filterFlights(): void {
        const filters = {
            origin: this.filterForm.value.origin?.name || null,
            destination: this.filterForm.value.destination?.name || null,
            startDate: this.isValidDate(this.filterForm.value.startDate) ? this.filterForm.value.startDate : null,
            endDate: this.isValidDate(this.filterForm.value.endDate) ? this.filterForm.value.endDate : null
        };

        this.dataSource.data = this.flights.filter(flight => {
            const matchesOrigin = filters.origin ? flight.origin === filters.origin : true;
            const matchesDestination = filters.destination ? flight.destination === filters.destination : true;
            const matchesStartDate = filters.startDate ? new Date(flight.boradingDate) >= new Date(filters.startDate) : true;
            const matchesEndDate = filters.endDate ? new Date(flight.arrivalDate) <= new Date(filters.endDate) : true;

            return matchesOrigin && matchesDestination && matchesStartDate && matchesEndDate;
        });
    }


    clearSearch(): void {
        if (this.datePickerComponent) {
            this.datePickerComponent.resetForms();
        }
        this.filterForm.reset();
        this.flightService.list().then(data => {
            this.flights = data;
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

    setModeVal(expandedModeTgl: any) {
        this.expandedMode = expandedModeTgl.toLowerCase() === 'true';
    }

    filterFlightsByDateRange(event: { start: Date; end: Date }) {
        this.filterForm.patchValue({
            startDate: event.start, endDate: event.end
        });
    }

    isValidDate = (date: any): boolean => {
        return date instanceof Date && !isNaN(date.getTime());
    };
}
