import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { InfoModule } from './info/info.module';
import { OffersModule } from './offers/offers.module';
import { OpinionsModule } from './opinions/opinions.module';
import { OptionsModule } from './options/options.module';
import { SearchModule } from './search/search.module';
import { StepsModule } from './steps/steps.module';
import { ToolbarModule } from './toolbar/toolbar.module';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    InfoModule,
    OffersModule,
    OpinionsModule,
    OptionsModule,
    SearchModule,
    StepsModule,
    ToolbarModule,
    FlexLayoutModule
  ],
  exports:[
    ProfileComponent
  ],
})
export class ProfileModule { }
