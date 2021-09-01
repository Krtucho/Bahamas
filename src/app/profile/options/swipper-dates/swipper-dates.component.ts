import { Component, OnInit } from '@angular/core';

import { ViewEncapsulation, ViewChild } from "@angular/core";
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Navigation]);

@Component({
  selector: 'app-swipper-dates',
  template: `
  
  <swiper [navigation]="false" [freeMode]="true">
  <!-- <ng-template>
    <div class="swiper-button-next">Next</div>
</ng-template>   -->
    

  <ng-template swiperSlide class="dates-container" style="max-width: 150px;">
    <app-profile-options-swiper-dates-bdate   ></app-profile-options-swiper-dates-bdate>
  </ng-template>
  <ng-template swiperSlide class="dates-container" style="max-width: 150px;">
    <app-profile-options-swiper-dates-bdate   ></app-profile-options-swiper-dates-bdate>
  </ng-template>
  <ng-template swiperSlide class="dates-container" style="max-width: 150px;">
    <app-profile-options-swiper-dates-bdate   ></app-profile-options-swiper-dates-bdate>
  </ng-template>
  <ng-template swiperSlide class="dates-container" style="max-width: 150px;">
    <app-profile-options-swiper-dates-bdate   ></app-profile-options-swiper-dates-bdate>
  </ng-template>
  <ng-template swiperSlide class="dates-container" style="max-width: 150px;">
    <app-profile-options-swiper-dates-bdate   ></app-profile-options-swiper-dates-bdate>
  </ng-template>
  <!-- <div class="swiper-button-prev">Prev</div> -->
</swiper>`,
  //'./swipper-dates.component.html',
  styleUrls: ['./swipper-dates.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SwipperDatesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
