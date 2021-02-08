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

GetAllNoteDetails() {
  return this.http.get<UserNoteDetails[]>(this.baseUrl + 'AllUserNoteDetails');
}

GetNoteDetailsByUser(userName: string) {
  return this.http.get<UserNoteDetails[]>(this.baseUrl + 'UserNoteDetailsByUser/' + userName);
}

AddNewUserNoteDetails(userNoteDetails: UserNoteDetails) {
  return this.http.post(this.baseUrl + 'NewUserNoteDetails', userNoteDetails);
}

UpdateNoteDetails(userNoteDetails: UserNoteDetails) {
  return this.http.put(this.baseUrl + 'UpdateUserNoteDetails', userNoteDetails);
}

}
