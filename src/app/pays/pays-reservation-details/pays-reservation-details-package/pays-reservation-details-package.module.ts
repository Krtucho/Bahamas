import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaysReservationDetailsPackageComponent } from './pays-reservation-details-package.component';
import { PaysReservationDetailsPackageItemComponent } from './pays-reservation-details-package-item/pays-reservation-details-package-item.component';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    PaysReservationDetailsPackageComponent,
    PaysReservationDetailsPackageItemComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports:[
    PaysReservationDetailsPackageComponent
  ]
})
export class PaysReservationDetailsPackageModule { }
