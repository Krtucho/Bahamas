import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationComponent } from './reservation.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatInputModule} from '@angular/material/input';
import { ReservationDataInputComponent } from './reservation-data-input/reservation-data-input.component';
import { MatIconModule } from '@angular/material/icon';
import { ReservationNumberSmallComponent } from './reservation-number-small/reservation-number-small.component';
import { ReservationNumberMediumComponent } from './reservation-number-medium/reservation-number-medium.component';
// import {MatLabelModule} from '@angular/material/label';

@NgModule({
  declarations: [
    ReservationComponent,
    ReservationDataInputComponent,
    ReservationNumberSmallComponent,
    ReservationNumberMediumComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatInputModule,
    MatIconModule
    // MatLabelModule
  ],
  exports:[
    ReservationComponent,
    ReservationDataInputComponent,
    ReservationNumberSmallComponent,
    ReservationNumberMediumComponent
  ]
})
export class ReservationModule { }
