import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserNoteDetails } from '../Models/UserNoteDetails';
import { UrlConfig } from '../Shared/UrlConfig';

@Injectable({
  providedIn: 'root'
})
export class UserNoteServiceService {
  private baseUrl = UrlConfig.baseUrl;

  constructor(private http: HttpClient) { }

 // tslint:disable-next-line:typedef
 GetAllNoteDetails() {
  return this.http.get<UserNoteDetails[]>(this.baseUrl + 'AllUserNoteDetails');
}

// tslint:disable-next-line:typedef
AddNewUserNoteDetails(userNoteDetails: UserNoteDetails) {
  return this.http.post(this.baseUrl + 'NewUserNoteDetails', userNoteDetails);
}

}
