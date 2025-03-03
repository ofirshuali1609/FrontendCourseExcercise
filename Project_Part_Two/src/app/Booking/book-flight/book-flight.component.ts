import { Component, inject, OnInit } from '@angular/core';
import { FlightsService } from '../../service/flights/flights.service';
import { Flight } from '../../model/flight';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { CommonModule, NgFor } from '@angular/common';
import { BookingsService } from '../../service/booking/booking.service';
import { MatStep, MatStepper } from "@angular/material/stepper";
import { debounceTime } from "rxjs";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute, Router } from "@angular/router";
import { Passenger } from "../../model/passenger";
import { DialogChooseLuggageComponent } from "../../dialog-choose-luggage/dialog-choose-luggage.component";
import { MatChip, MatChipSet } from "@angular/material/chips";

@Component({
    selector: 'app-book-flight',
    imports: [CommonModule, MatCardModule, MatButtonModule, MatFormFieldModule, MatNativeDateModule, MatDatepickerModule, MatInputModule, FormsModule, MatSelectModule, NgFor, MatStepper, MatStep, ReactiveFormsModule, MatChip, MatChipSet],
    templateUrl: './book-flight.component.html',
    styleUrl: './book-flight.component.css'
})
export class BookFlightComponent implements OnInit {
    flight!: Flight;
    bookings_service = inject(BookingsService);
    flight_service = inject(FlightsService);
    all_flights: Flight[] = [];
    bookingForm!: FormGroup;
    readonly dialog = inject(MatDialog);
    luggageWeights = {
        cabin: 8,
        checked: 23,
        heavy: 32
    };
    private _formBuilder = inject(FormBuilder);

    constructor(private route: ActivatedRoute, private router: Router) {
        this.initForm();
    }

    get passAmount() {
        return this.bookingForm.get('passAmount') as FormGroup;
    }

    get passDetails() {
        return this.bookingForm.get('passDetails') as FormArray;
    }

    hasLuggage(index: number): boolean {
        const luggage = this.passDetails.at(index).get('Luggage')?.value;
        return luggage.cabin > 0 || luggage.checked > 0 || luggage.heavy > 0;
    }

    getTotalLuggage(index: number): number {
        const luggage = this.passDetails.at(index).get('Luggage')?.value;
        return (luggage.cabin || 0) + (luggage.checked || 0) + (luggage.heavy || 0);
    }

    getTotalLuggageWeight(index: number): number {
        const luggage = this.passDetails.at(index).get('Luggage')?.value;
        return (luggage.cabin || 0) * this.luggageWeights.cabin +
            (luggage.checked || 0) * this.luggageWeights.checked +
            (luggage.heavy || 0) * this.luggageWeights.heavy;
    }

    getLuggageDetails(index: number): string[] {
        const luggage = this.passDetails.at(index).get('Luggage')?.value;
        const luggageDetails: string[] = [];

        if (luggage.cabin > 0) luggageDetails.push(`${luggage.cabin}x ${this.luggageWeights.cabin}kg`);
        if (luggage.checked > 0) luggageDetails.push(`${luggage.checked}x ${this.luggageWeights.checked}kg`);
        if (luggage.heavy > 0) luggageDetails.push(`${luggage.heavy}x ${this.luggageWeights.heavy}kg`);
        return luggageDetails;
    }

    initForm(): void {
        this.bookingForm = this._formBuilder.group({
            passAmount: this._formBuilder.group({
                amount: [1, Validators.required]
            }),
            passDetails: this._formBuilder.array([])
        });

        this.updatePassengerArray(this.bookingForm.get('passAmount')?.value.amount || 1);

        this.bookingForm.get('passAmount')!.valueChanges.pipe(debounceTime(300)).subscribe(value => {
            this.updatePassengerArray(value.amount);
        });
    }

    createPassengerForm(): FormGroup {
        return this._formBuilder.group({
            full_name: [null, Validators.required],
            passport_number: [null, Validators.required],
            Luggage: this._formBuilder.group({
                cabin: [0, Validators.required],
                checked: [0, Validators.required],
                heavy: [0, Validators.required],
            })
        });
    }

    updatePassengerArray(newCount: number): void {
        const passDetails = this.bookingForm.get('passDetails') as FormArray;

        while (passDetails.length < newCount) passDetails.push(this.createPassengerForm());
        while (passDetails.length > newCount) passDetails.removeAt(passDetails.length - 1);
    }

    ngOnInit() {
        const code = this.route.snapshot.paramMap.get("flightNo");
        this.flight_service.list().then((flights: Flight[]) => {
            this.all_flights = flights;
            const dest = flights.find((d) => d.flightNo == code)
            if (!dest) {
                alert("Destination not found.");
                this.router.navigate(["/admin-manage-destinations"]);
                return;
            }
            this.flight = dest;
        });
    }

    async bookFlight() {
        const allPassengersValid = this.passDetails.controls.every((passGroup) => {
            const fullName = passGroup.get('full_name')?.value;
            const passportNumber = passGroup.get('passport_number')?.value;
            return fullName && passportNumber;
        });

        if (!allPassengersValid) {
            alert("Please fill in all passenger details.");
            return;
        }

        const passengers: Passenger[] = this.passDetails.controls.map((passGroup) => ({
            name: passGroup.get('full_name')?.value,
            passport: passGroup.get('passport_number')?.value,
            baggages: passGroup.get('Luggage')?.value,
        }));

        await this.bookings_service.add({
            flight: this.flight.flightNo,
            passengers,
            numOfPassengers: this.bookingForm.get('passAmount.amount')?.value || 1
        });

        alert("Flight booked successfully!");
        window.location.reload();
        window.location.href = "/myBookings";
    }


    openChooseLuggageDialog(index: number) {
        const passengerLuggage = this.passDetails.at(index)?.get('Luggage')?.value || {cabin: 0, checked: 0, heavy: 0};

        const dialogRef = this.dialog.open(DialogChooseLuggageComponent, {
            data: {
                name: this.passDetails.at(index)?.get('full_name')?.value,
                luggage: {...passengerLuggage}
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.passDetails.at(index)?.get('Luggage')?.setValue(result);
            }
        });
    }
}
