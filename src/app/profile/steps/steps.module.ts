import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepsComponent } from './steps.component';
import { MatStepperModule } from '@angular/material/stepper';



@NgModule({
  declarations: [StepsComponent],
  imports: [
    CommonModule,
    MatStepperModule
  ],
  exports:[StepsComponent]
})
export class StepsModule { }
