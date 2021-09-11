import { Component, OnInit } from '@angular/core';

import { ViewEncapsulation, ViewChild } from "@angular/core";
import { FormControl } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Navigation]);

@Component({
  selector: 'app-swipper-dates',
  templateUrl: './swipper-dates.component.html',
  //'./swipper-dates.component.html',
  styleUrls: ['./swipper-dates.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SwipperDatesComponent implements OnInit {

  // links = ['First', 'Second', 'Third'];
  // activeLink = this.links[0];
  // background: ThemePalette = undefined;

  // toggleBackground() {
  //   this.background = this.background ? undefined : 'primary';
  // }

  // addLink() {
  //   this.links.push(`Link ${this.links.length + 1}`);
  // }

  tabs = ['First', 'Second', 'Third'];
  selected = new FormControl(0);

  addTab(selectAfterAdding: boolean) {
    this.tabs.push('New');

    if (selectAfterAdding) {
      this.selected.setValue(this.tabs.length - 1);
    }
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}


  
//   <swiper [navigation]="true" [freeMode]="true">
//   <!-- <ng-template>
//     <div class="swiper-button-next">Next</div>
// </ng-template>   -->
    

//   <ng-template swiperSlide class="dates-container" style="max-width: 150px;">
//     <app-profile-options-swiper-dates-bdate   ></app-profile-options-swiper-dates-bdate>
//   </ng-template>
//   <ng-template swiperSlide class="dates-container" style="max-width: 150px;">
//     <app-profile-options-swiper-dates-bdate   ></app-profile-options-swiper-dates-bdate>
//   </ng-template>
//   <ng-template swiperSlide class="dates-container" style="max-width: 150px;">
//     <app-profile-options-swiper-dates-bdate   ></app-profile-options-swiper-dates-bdate>
//   </ng-template>
//   <ng-template swiperSlide class="dates-container" style="max-width: 150px;">
//     <app-profile-options-swiper-dates-bdate   ></app-profile-options-swiper-dates-bdate>
//   </ng-template>
//   <ng-template swiperSlide class="dates-container" style="max-width: 150px;">
//     <app-profile-options-swiper-dates-bdate   ></app-profile-options-swiper-dates-bdate>
//   </ng-template>
//   <!-- <div class="swiper-button-prev">Prev</div> -->
// </swiper>,