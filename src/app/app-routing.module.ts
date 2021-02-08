import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailComponent } from './Components/user-details/UserDetail/UserDetail.component';
import { UserNoteComponent } from './Components/user-details/UserNote/UserNote.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: UserDetailComponent
  },
  {
    path: 'viewNote',
    component: UserNoteComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
