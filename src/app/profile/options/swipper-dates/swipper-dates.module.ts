import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwipperDatesComponent } from './swipper-dates.component';
import { SwiperModule } from "swiper/angular";
import { ProfileOptionsSwiperDatesBdateComponent } from './profile-options-swiper-dates-bdate/profile-options-swiper-dates-bdate.component';
import { ProfileOptionsSwiperDatesBldateComponent } from './profile-options-swiper-dates-bldate/profile-options-swiper-dates-bldate.component';
import { FlexLayoutModule } from '@angular/flex-layout';




@NgModule({
  declarations: [SwipperDatesComponent, ProfileOptionsSwiperDatesBdateComponent, ProfileOptionsSwiperDatesBldateComponent],
  imports: [
    CommonModule,
    SwiperModule,
    FlexLayoutModule
  ],
  exports:[SwipperDatesComponent]
})
export class SwipperDatesModule { }
