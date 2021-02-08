import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DevExtremeModule } from 'devextreme-angular';

import { HttpClientModule } from '@angular/common/http';
import { UserDetailComponent } from './Components/user-details/UserDetail/UserDetail.component';
import { UserNoteComponent } from './Components/user-details/UserNote/UserNote.component';


@NgModule({
  declarations: [
    AppComponent,
    UserDetailComponent,
    UserNoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DevExtremeModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
