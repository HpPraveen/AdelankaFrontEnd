import { Component, OnInit } from '@angular/core';
import { UserNoteDetails } from 'src/app/Models/UserNoteDetails';
import { UserNoteServiceService } from 'src/app/Services/UserNoteService.service';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-ViewNotes',
  templateUrl: './ViewNotes.component.html',
  styleUrls: ['./ViewNotes.component.scss']
})
export class ViewNotesComponent implements OnInit {

  userNoteDetails: UserNoteDetails[];
  comment: string = null;
  userNoteDetail: UserNoteDetails;

  constructor(private userNoteServiceService: UserNoteServiceService) { }

  ngOnInit() {
    this.userNoteServiceService.GetAllNoteDetails().subscribe((c) => {
      this.userNoteDetails = c;
    });
  }

  commentChanged(e)
  {
    this.comment = e.value;
  }

  addCommentClick(e){
    debugger;
    this.userNoteDetail = {
      Comment: this.comment,
      Username: e.username,
      Title: e.title,
      Note: e.note,
      ModifiedDate: e.modifiedDate,
      Id: e.id
     };

    this.userNoteServiceService.UpdateNoteDetails(this.userNoteDetail).subscribe((c) => {
      if (c === true) {
        window.location.reload();
        notify(
          {
            message: 'Comment added successfully',
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
        }});
  }

}
