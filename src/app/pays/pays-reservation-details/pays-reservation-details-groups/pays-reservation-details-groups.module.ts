import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaysReservationDetailsGroupsComponent } from './pays-reservation-details-groups.component';
import { PaysReservationDetailsGroupsItemComponent } from './pays-reservation-details-groups-item/pays-reservation-details-groups-item.component';
import { PaysReservationDetailsGroupsSectionsComponent } from './pays-reservation-details-groups-sections/pays-reservation-details-groups-sections.component';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    PaysReservationDetailsGroupsComponent,
    PaysReservationDetailsGroupsItemComponent,
    PaysReservationDetailsGroupsSectionsComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports:[
    PaysReservationDetailsGroupsComponent
  ]
})
export class PaysReservationDetailsGroupsModule { }
