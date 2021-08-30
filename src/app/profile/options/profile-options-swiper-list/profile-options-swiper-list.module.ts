import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileOptionsSwiperListComponent } from './profile-options-swiper-list.component';
import { SwipperProfileOptionsOptionModule } from './swipper-profile-options-option/swipper-profile-options-option.module';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    ProfileOptionsSwiperListComponent
  ],
  imports: [
    CommonModule,
    SwipperProfileOptionsOptionModule,
    MatCardModule,
    MatIconModule,
    MatStepperModule,
    FlexLayoutModule
  ],
  exports:[
    ProfileOptionsSwiperListComponent
  ]
})
export class ProfileOptionsSwiperListModule { }
