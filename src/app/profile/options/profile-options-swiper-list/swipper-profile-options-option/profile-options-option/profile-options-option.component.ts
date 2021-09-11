import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-options-option',
  templateUrl: './profile-options-option.component.html',
  styleUrls: ['./profile-options-option.component.scss']
})
export class ProfileOptionsOptionComponent implements OnInit {
  // Input() swap: boolean;
  
  @Input() panelOpenState: boolean;
  
  constructor() { }

  ngOnInit(): void {
  }

  onSwapExpanded(){

  }

}
