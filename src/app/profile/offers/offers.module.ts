import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffersComponent } from './offers.component';
import { MatCardModule } from '@angular/material/card';
import { OffersMoreOffersComponent } from './offers-more-offers/offers-more-offers.component';
import { OffersListComponent } from './offers-list/offers-list.component';
import { OffersTitleComponent } from './offers-title/offers-title.component';
import { OffersListModule } from './offers-list/offers-list.module';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    OffersComponent, 
    OffersMoreOffersComponent, 
    OffersTitleComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    OffersListModule,
    FlexLayoutModule
  ],
  exports:[
    OffersComponent
  ]
})
export class OffersModule { }
