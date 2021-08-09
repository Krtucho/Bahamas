import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaysPayDetailsDataComponent } from './pays-pay-details-data.component';
import { ReservationDataInputComponent } from 'src/app/reservation/reservation-data-input/reservation-data-input.component';
import { ReservationNumberMediumComponent } from 'src/app/reservation/reservation-number-medium/reservation-number-medium.component';
import { ReservationNumberSmallComponent } from 'src/app/reservation/reservation-number-small/reservation-number-small.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReservationModule } from 'src/app/reservation/reservation.module';



@NgModule({
  declarations: [
    PaysPayDetailsDataComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReservationModule
  ],
  exports:[
    PaysPayDetailsDataComponent
  ]
})
export class PaysPayDetailsDataModule { }
