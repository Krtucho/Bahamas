import { Component, OnInit, Input, Output } from '@angular/core';

import { ViewEncapsulation, ViewChild } from "@angular/core";

// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Navigation]);

@Component({
  selector: 'app-swipper-profile-options-option',
  template: `<swiper [navigation]="false" [freeMode]="true">
  <ng-template swiperSlide class="swiper-option-item">
    <app-profile-options-option [panelOpenState]="isExpended"></app-profile-options-option>
  </ng-template>
  <ng-template swiperSlide class="swiper-option-item">
    <app-profile-options-option [panelOpenState]="isExpended"></app-profile-options-option>
  </ng-template>
  <ng-template swiperSlide class="swiper-option-item">
    <app-profile-options-option [panelOpenState]="isExpended"></app-profile-options-option>
  </ng-template>
</swiper>`,
  styleUrls: ['./swipper-profile-options-option.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SwipperProfileOptionsOptionComponent implements OnInit {
  @Input() isExpended:boolean;

  constructor() { }

  ngOnInit(): void {
  }

  // onSwapExpanded(expandedSignal: {isExpanded: boolean}){
  //   this.isExpended = expandedSignal.isExpanded;
  // }

}
