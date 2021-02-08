import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DevExtremeModule } from 'devextreme-angular';

import { HttpClientModule } from '@angular/common/http';
import { UserNoteComponent } from './Components/UserNote/UserNote.component';
import { UserDetailsComponent } from './Components/UserDetails/UserDetails.component';
import { ViewNotesComponent } from './Components/Shared/ViewNotes/ViewNotes.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    UserNoteComponent,
    ViewNotesComponent
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
