import { Component, OnInit } from '@angular/core';

import { ViewEncapsulation, ViewChild } from "@angular/core";
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Navigation]);

@Component({
  selector: 'app-swipper-dates',
  template: `<swiper [navigation]="false" [freeMode]="true">
  <ng-template swiperSlide>
    <div style="background-color: grey; color: white; padding: 20px">Slide 1</div>
  </ng-template>

  <ng-template swiperSlide>
    <div style="background-color: grey; color: white; padding: 20px">Slide 1</div>
  </ng-template>

  <ng-template swiperSlide>
    <div style="background-color: grey; color: white; padding: 20px">Slide 1</div>
  </ng-template>

  <ng-template swiperSlide>
    <div style="background-color: grey; color: white; padding: 20px">Slide 1</div>
  </ng-template>
  
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
