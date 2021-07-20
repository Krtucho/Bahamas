import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffersListOfferComponent } from './offers-list-offer/offers-list-offer.component';
import { OffersListComponent } from './offers-list.component';
import { OffersListOfferModule } from './offers-list-offer/offers-list-offer.module';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [OffersListComponent],
  imports: [
    CommonModule,
    OffersListOfferModule,
    FlexLayoutModule
  ],
  exports:[
    OffersListComponent
  ]
})
export class OffersListModule { }
