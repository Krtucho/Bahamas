import { Component, Input, EventEmitter,OnInit, Output } from '@angular/core';
// import * as EventEmitter from 'events';

@Component({
  selector: 'app-profile-options-swiper-list',
  templateUrl: './profile-options-swiper-list.component.html',
  styleUrls: ['./profile-options-swiper-list.component.scss']
})
export class ProfileOptionsSwiperListComponent implements OnInit {
  // @Output() swapExpanded = new EventEmitter<{isExpanded: boolean}>();

  expanded = false;
  constructor() { }

  ngOnInit(): void {
  }

  onExpandSwap(): void{
    this.expanded = !this.expanded;
    // this.swapExpanded.emit({
    //   isExpanded: this.expanded
    // });
    console.log(this.expanded);
  }

}
