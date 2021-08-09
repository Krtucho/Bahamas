import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PaysReservationDetailsCountsComponent } from './pays-reservation-details-counts.component';
import { PaysReservationDetailsCountsSubtotalComponent } from './pays-reservation-details-counts-subtotal/pays-reservation-details-counts-subtotal.component';
import { PaysReservationDetailsCountsTotalComponent } from './pays-reservation-details-counts-total/pays-reservation-details-counts-total.component';



@NgModule({
  declarations: [
    PaysReservationDetailsCountsComponent,
    PaysReservationDetailsCountsSubtotalComponent,
    PaysReservationDetailsCountsTotalComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule
  ], 
  exports:[PaysReservationDetailsCountsComponent]
})
export class PaysReservationDetailsCountsModule { }
