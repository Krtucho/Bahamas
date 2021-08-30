import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwipperProfileOptionsOptionComponent } from './swipper-profile-options-option.component';
import { SwiperModule } from "swiper/angular";
import { ProfileOptionsOptionComponent } from './profile-options-option/profile-options-option.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { NgpMaterialRatingModule } from 'ngp-material-rating';

@NgModule({
  declarations: [
    SwipperProfileOptionsOptionComponent,ProfileOptionsOptionComponent
  ],
  imports: [
    CommonModule,
    SwiperModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatStepperModule,
    NgpMaterialRatingModule
  ],
  exports: [
    SwipperProfileOptionsOptionComponent
  ]
})
export class SwipperProfileOptionsOptionModule { }
