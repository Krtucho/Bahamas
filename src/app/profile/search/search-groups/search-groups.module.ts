import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchGroupsComponent } from './search-groups.component';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [SearchGroupsComponent],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports:[
    SearchGroupsComponent
  ]
})
export class SearchGroupsModule { }
