import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewNotesComponent } from './Components/Shared/ViewNotes/ViewNotes.component';
import { UserDetailsComponent } from './Components/UserDetails/UserDetails.component';
import { UserNoteComponent } from './Components/UserNote/UserNote.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: UserDetailsComponent
  },
  {
    path: 'createNote',
    component: UserNoteComponent
  },
  {
    path: 'viewNote',
    component: ViewNotesComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
