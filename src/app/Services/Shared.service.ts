import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  loggedUser: string;
  loggedUserName: string;

constructor() { }

}
