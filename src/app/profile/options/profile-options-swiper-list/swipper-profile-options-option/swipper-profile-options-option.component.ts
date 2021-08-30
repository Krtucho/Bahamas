import { Component, OnInit } from '@angular/core';

import { ViewEncapsulation, ViewChild } from "@angular/core";

// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Navigation]);

@Component({
  selector: 'app-swipper-profile-options-option',
  template: `<swiper fxFlex="100%" [navigation]="false" [freeMode]="true">
  <ng-template swiperSlide>
    <app-profile-options-option style="background-color: grey; color: white; margin-left: 20px; max-width: 380px;"></app-profile-options-option>
  </ng-template>
  <ng-template swiperSlide>
    <app-profile-options-option style="background-color: grey; color: white; margin-left: 20px; max-width: 380px;" ></app-profile-options-option>
  </ng-template>
  <ng-template swiperSlide>
    <app-profile-options-option style="background-color: grey; color: white; margin-left: 20px; max-width: 380px;"></app-profile-options-option>
  </ng-template>
</swiper>`,
  styleUrls: ['./swipper-profile-options-option.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SwipperProfileOptionsOptionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
