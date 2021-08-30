import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwipperDatesComponent } from './swipper-dates.component';
import { SwiperModule } from "swiper/angular";




@NgModule({
  declarations: [SwipperDatesComponent],
  imports: [
    CommonModule,
    SwiperModule
  ],
  exports:[SwipperDatesComponent]
})
export class SwipperDatesModule { }
