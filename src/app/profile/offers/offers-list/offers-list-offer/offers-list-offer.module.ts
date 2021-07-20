import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffersListOfferComponent } from './offers-list-offer.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [OffersListOfferComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    FlexLayoutModule
  ],
  exports:[
    OffersListOfferComponent
  ]
})
export class OffersListOfferModule { }
