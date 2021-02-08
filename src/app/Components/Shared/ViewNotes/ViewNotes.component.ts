import { Component, OnInit } from '@angular/core';
import { UserNoteDetails } from 'src/app/Models/UserNoteDetails';
import { UserNoteServiceService } from 'src/app/Services/UserNoteService.service';

@Component({
  selector: 'app-ViewNotes',
  templateUrl: './ViewNotes.component.html',
  styleUrls: ['./ViewNotes.component.scss']
})
export class ViewNotesComponent implements OnInit {

  userNoteDetails: UserNoteDetails[];
  comment: string = null;


  constructor(private userNoteServiceService: UserNoteServiceService) { }

  ngOnInit() {

    this.userNoteServiceService.GetAllNoteDetails().subscribe((c) => {
      debugger;
      this.userNoteDetails = c;
    });
  }

}
