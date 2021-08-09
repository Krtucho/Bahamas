import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaysReservationDetailsPackageModule } from './pays-reservation-details-package/pays-reservation-details-package.module';
import { PaysReservationDetailsComponent } from './pays-reservation-details.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PaysReservationDetailsGroupsModule } from './pays-reservation-details-groups/pays-reservation-details-groups.module';
import { PaysReservationDetailsCountsModule } from './pays-reservation-details-counts/pays-reservation-details-counts.module';



@NgModule({
  declarations: [
    PaysReservationDetailsComponent
  ],
  imports: [
    CommonModule,
    PaysReservationDetailsPackageModule,
    PaysReservationDetailsGroupsModule,
    PaysReservationDetailsCountsModule,
    FlexLayoutModule
  ],
  exports:[
    PaysReservationDetailsComponent
  ]
})
export class PaysReservationDetailsModule { }
