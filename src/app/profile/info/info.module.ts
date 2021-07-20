import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info.component';
import { NgpMaterialRatingModule } from 'ngp-material-rating';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [InfoComponent],
  imports: [
    CommonModule,
    NgpMaterialRatingModule,
    MatCardModule,
    MatIconModule,
    FlexLayoutModule
  ],
  exports:[
    InfoComponent
  ]
})
export class InfoModule { }
