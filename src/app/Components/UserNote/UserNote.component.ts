import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import notify from 'devextreme/ui/notify';
import { UserNoteDetails } from 'src/app/Models/UserNoteDetails';
import { SystemUserService } from 'src/app/Services/system-user-service';
import { UserNoteServiceService } from 'src/app/Services/UserNoteService.service';
@Component({
  selector: 'app-UserNote',
  templateUrl: './UserNote.component.html',
  styleUrls: ['./UserNote.component.css']
})
export class UserNoteComponent implements OnInit {

  noteTitle: string = null;
  noteDetails: string = null;
  userNoteDetails: UserNoteDetails;

  // tslint:disable-next-line:max-line-length
  constructor(private userNoteServiceService: UserNoteServiceService, private systemUserService: SystemUserService, private router: Router) { }

  ngOnInit() {
  }

  CreateNoteClick(e){
    if (this.noteTitle === null || this.noteTitle === '' || this.noteDetails === null || this.noteDetails === '' ) {
      notify(
        {
          message: 'Fill the all fields',
          position: {
            my: 'top right',
            at: 'top right',
            offset: '20 50',
          },
          width: '300px',
        },
        'error',
        2000
      );
    } else {
      debugger;
      this.userNoteDetails = {
        Username:  this.systemUserService.loggedUser,
        Title: this.noteDetails,
        Note: this.noteTitle,
        Comment: 'Newly created',
        ModifiedDate: new Date().toISOString(),
       };
      this.userNoteServiceService.AddNewUserNoteDetails(this.userNoteDetails).subscribe((c) => {
        if (c === true) {
          notify(
            {
              message: 'Successfully Save',
              position: {
                my: 'top right',
                at: 'top right',
                offset: '20 50',
              },
              width: '300px',
            },
            'success',
            2000
          );
        }
        else{
          notify(
            {
              message: 'Save faild',
              position: {
                my: 'top right',
                at: 'top right',
                offset: '20 50',
              },
              width: '300px',
            },
            'error',
            2000
          );
        }
      });
    }
  }

  viewNotesClick(e){
    this.router.navigate(['/viewNote']);
  }

}
