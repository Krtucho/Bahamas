import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwipperDatesComponent } from './swipper-dates.component';
import { SwiperModule } from "swiper/angular";
import { ProfileOptionsSwiperDatesBdateComponent } from './profile-options-swiper-dates-bdate/profile-options-swiper-dates-bdate.component';
import { ProfileOptionsSwiperDatesBldateComponent } from './profile-options-swiper-dates-bldate/profile-options-swiper-dates-bldate.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatTabsModule} from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { ProfileOptionsSwiperListModule } from '../profile-options-swiper-list/profile-options-swiper-list.module';
// import { ProfileOptionsSwiperListComponent } from '../profile-options-swiper-list/profile-options-swiper-list.component';


@NgModule({
  declarations: [
    SwipperDatesComponent, 
    ProfileOptionsSwiperDatesBdateComponent, 
    ProfileOptionsSwiperDatesBldateComponent,
    ],
  imports: [
    CommonModule,
    SwiperModule,
    FlexLayoutModule,
    MatTabsModule,
    MatIconModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    ProfileOptionsSwiperListModule
  ],
  exports:[SwipperDatesComponent]
})
export class SwipperDatesModule { }
