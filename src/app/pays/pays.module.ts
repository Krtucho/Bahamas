import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaysComponent } from './pays.component';
import { ToolbarModule } from '../profile/toolbar/toolbar.module';
import { StepsModule } from '../profile/steps/steps.module';
import { PaysReservationDetailsModule } from './pays-reservation-details/pays-reservation-details.module';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PaysClientDetailsModule } from './pays-client-details/pays-client-details.module';
import { PaysPayDetailsModule } from './pays-pay-details/pays-pay-details.module';



@NgModule({
  declarations: [
    PaysComponent
  ],
  imports: [
    CommonModule,
    ToolbarModule,
    StepsModule,
    PaysReservationDetailsModule,
    PaysClientDetailsModule,
    PaysPayDetailsModule,
    MatCardModule,
    FlexLayoutModule
  ],
  exports:[
    PaysComponent
  ]
})
export class PaysModule { }
