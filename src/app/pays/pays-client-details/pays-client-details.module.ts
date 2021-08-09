import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaysClientDetailsComponent } from './pays-client-details.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PaysClientDetailsEditComponent } from './pays-client-details-edit/pays-client-details-edit.component';
import { PaysClientDetailsInfoModule } from './pays-client-details-info/pays-client-details-info.module';



@NgModule({
  declarations: [
    PaysClientDetailsComponent,
    PaysClientDetailsEditComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    PaysClientDetailsInfoModule
  ],
  exports:[
    PaysClientDetailsComponent
  ]
})
export class PaysClientDetailsModule { }
