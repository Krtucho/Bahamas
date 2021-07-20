import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatStepperModule} from '@angular/material/stepper';
// import { ProfileComponent } from './profile/profile.component';
import { ToolbarComponent } from './profile/toolbar/toolbar.component';
import { InfoComponent } from './profile/info/info.component';
import { OptionsComponent } from './profile/options/options.component';
import { OpinionsComponent } from './profile/opinions/opinions.component';
import { OffersComponent } from './profile/offers/offers.component';
import { StepsComponent } from './profile/steps/steps.component';
import { ReservationCardComponent } from './profile/reservation-card/reservation-card.component';
import { SearchComponent } from './profile/search/search.component';
import { NgpMaterialRatingModule } from 'ngp-material-rating';
import { SwiperModule } from "swiper/angular";
import { SwipperDatesComponent } from './profile/options/swipper-dates/swipper-dates.component';
import { SearchGroupsComponent } from './profile/search/search-groups/search-groups.component';
import { OpinionsRatingComponent } from './profile/opinions/opinions-rating/opinions-rating.component';
import { OpinionsOpinionComponent } from './profile/opinions/opinions-opinion/opinions-opinion.component';
import { OffersListComponent } from './profile/offers/offers-list/offers-list.component';
import { OffersListOfferComponent } from './profile/offers/offers-list/offers-list-offer/offers-list-offer.component';
import { OffersTitleComponent } from './profile/offers/offers-title/offers-title.component';
import { OffersMoreOffersComponent } from './profile/offers/offers-more-offers/offers-more-offers.component';
import { ProfileModule } from './profile/profile.module';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    // ProfileComponent,
    // ToolbarComponent,
    // InfoComponent,
    // OptionsComponent,
    // OpinionsComponent,
    // OffersComponent,
    // StepsComponent,
    ReservationCardComponent,
    // SearchComponent,
    // SwipperDatesComponent,
    // SearchGroupsComponent,
    // SheylaComponent,
    // InitialSliderComponent,
    // SheylaToolbarComponent,
    // OpinionsRatingComponent,
    // OpinionsOpinionComponent,
    // OffersListComponent,
    // OffersListOfferComponent,
    // OffersTitleComponent,
    // OffersMoreOffersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatCardModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatStepperModule,
    NgpMaterialRatingModule,
    SwiperModule,
    //Profile
    ProfileModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
