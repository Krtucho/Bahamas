import { Component, OnInit } from '@angular/core';

import { ViewEncapsulation, ViewChild } from "@angular/core";
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Navigation]);

@Component({
  selector: 'app-swipper-dates',
  template: `<swiper [navigation]="true" class="mySwiper">
  <ng-template swiperSlide>Slide 1</ng-template
  ><ng-template swiperSlide>Slide 2</ng-template
  ><ng-template swiperSlide>Slide 3</ng-template
  ><ng-template swiperSlide>Slide 4</ng-template
  ><ng-template swiperSlide>Slide 5</ng-template
  ><ng-template swiperSlide>Slide 6</ng-template
  ><ng-template swiperSlide>Slide 7</ng-template
  ><ng-template swiperSlide>Slide 8</ng-template
  ><ng-template swiperSlide>Slide 9</ng-template>
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
