import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaysPayDetailsComponent } from './pays-pay-details.component';
import { PaysPayDetailsMethodsComponent } from './pays-pay-details-methods/pays-pay-details-methods.component';
import { PaysPayDetailsFeeComponent } from './pays-pay-details-fee/pays-pay-details-fee.component';
import { PaysPayDetailsProceedComponent } from './pays-pay-details-proceed/pays-pay-details-proceed.component';
import { PaysPayDetailsDataModule } from './pays-pay-details-data/pays-pay-details-data.module';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    PaysPayDetailsComponent,
    PaysPayDetailsMethodsComponent,
    PaysPayDetailsFeeComponent,
    PaysPayDetailsProceedComponent
  ],
  imports: [
    CommonModule,
    PaysPayDetailsDataModule,
    FlexLayoutModule
  ],
  exports:[
    PaysPayDetailsComponent
  ]
})
export class PaysPayDetailsModule { }
