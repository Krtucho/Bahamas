import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { MatCardModule } from '@angular/material/card';
import { SearchGroupsComponent } from './search-groups/search-groups.component';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SearchGroupsModule } from './search-groups/search-groups.module';
import { ProfileSearchSubtotalComponent } from './profile-search-subtotal/profile-search-subtotal.component';



@NgModule({
  declarations: [SearchComponent, ProfileSearchSubtotalComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    FlexLayoutModule,
    SearchGroupsModule
  ],
  exports:[SearchComponent]
})
export class SearchModule { }
