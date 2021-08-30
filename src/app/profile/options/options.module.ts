import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionsComponent } from './options.component';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { SwipperDatesModule } from './swipper-dates/swipper-dates.module';
import { NgpMaterialRatingModule } from 'ngp-material-rating';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { ProfileOptionsSwiperListModule } from './profile-options-swiper-list/profile-options-swiper-list.module';
// import { SwiperModule } from 'swiper/angular/swiper-angular';



@NgModule({
  declarations: [OptionsComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatStepperModule,
    MatIconModule,
    NgpMaterialRatingModule,
    SwipperDatesModule,
    FlexLayoutModule,
    MatButtonModule,
    ProfileOptionsSwiperListModule
    // SwiperModule
  ],
  exports:[
    OptionsComponent
  ]
})
export class OptionsModule { }
