import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaysClientDetailsInfoMenuComponent } from './pays-client-details-info-menu/pays-client-details-info-menu.component';
import { PaysClientDetailsInfoItemComponent } from './pays-client-details-info-item/pays-client-details-info-item.component';
import { PaysClientDetailsInfoComponent } from './pays-client-details-info.component';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    PaysClientDetailsInfoComponent,
    PaysClientDetailsInfoMenuComponent,
    PaysClientDetailsInfoItemComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports:[
    PaysClientDetailsInfoComponent
  ]
})
export class PaysClientDetailsInfoModule { }
