import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DevExtremeModule } from 'devextreme-angular';
import { UserDetailsComponent } from './Components/user-details/user-details.component';
// import { SystemUserService } from './Services/system-user-service';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DevExtremeModule
  ],
  providers: [
    // SystemUserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
