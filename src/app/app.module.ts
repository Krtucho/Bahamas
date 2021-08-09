import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

// import { FlexLayoutModule } from '@angular/flex-layout';
import { ProfileModule } from './profile/profile.module';
import { ReservationModule } from './reservation/reservation.module';
import { PaysModule } from './pays/pays.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    // MatSliderModule,
    // MatButtonModule,
    // MatCardModule,
    // FlexLayoutModule,
    
    ProfileModule, // Profile
    ReservationModule, // Reservation
    PaysModule // Pays
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
