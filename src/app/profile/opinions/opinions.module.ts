import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpinionsComponent } from './opinions.component';
import { MatCardModule } from '@angular/material/card';
import { OpinionsOpinionComponent } from './opinions-opinion/opinions-opinion.component';
import { OpinionsRatingComponent } from './opinions-rating/opinions-rating.component';
import { NgpMaterialRatingModule } from 'ngp-material-rating';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [OpinionsComponent, OpinionsOpinionComponent, OpinionsRatingComponent],
  imports: [
    CommonModule,
    MatCardModule, 
    NgpMaterialRatingModule,
    FlexLayoutModule
  ],
  exports:[OpinionsComponent]
})
export class OpinionsModule { }
