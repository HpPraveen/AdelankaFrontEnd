import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SystemUserDetails } from '../Models/SystemUserDetails';
import { UrlConfig } from '../Shared/UrlConfig';

@Injectable({
  providedIn: 'root'
})
export class SystemUserService {
  private baseUrl = UrlConfig;

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  GetSystemUserByUserNameAndPassword(userName: string,  password: string) {
    debugger;
    return this.http.get<SystemUserDetails[]>(this.baseUrl + 'UserDetails/' + userName + '/' + password);
  }

}
