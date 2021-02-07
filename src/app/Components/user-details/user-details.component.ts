import { Component, OnInit } from '@angular/core';
import { SystemUserDetails } from 'src/app/Models/SystemUserDetails';
import { SystemUserService } from 'src/app/Services/system-user-service';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  signInUsername: string = null;
  signInPsw: string = null;
  signUpFname: string = null;
  signUpLname: string = null;
  signUpEmail: string = null;
  signUpUsername: string = null;
  signUpPsw: string = null;
  signUpRepeatPsw: string = null;
  disableSignInPsw = false;
  systemUserDetails: Array<SystemUserDetails> = [];
  systemUserService: SystemUserService;

  constructor() { }

  ngOnInit(): void{
    // debugger;
    // this.systemUserService.GetSystemUserByUserNameAndPassword(this.signInUsername, this.signUpPsw).subscribe((c) => {
    //   debugger;
    //   let v = c;
    //   alert('Successfully login');
    // });
  }


  onSignUpPswChange(e){
    if (this.signUpPsw !== this.signUpRepeatPsw) {
      this.signUpRepeatPsw = '';
    }
  }

  onSignUpRepeatPswChange(e){
    if (this.signUpPsw !== this.signUpRepeatPsw) {
      notify(
        {
          message: 'Password unmatch',
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
  }


  SignInClick(e) {

    debugger;
    this.systemUserService.GetSystemUserByUserNameAndPassword(this.signInUsername, this.signUpPsw).subscribe((c) => {
      debugger;
      let v = c;
      alert('Successfully login');
    });

  }

  SignUpClick(e) {

    const systemUser = new SystemUserDetails();
    systemUser.FirstName = this.signUpFname;
    systemUser.LastName = this.signUpFname;
    systemUser.Email = this.signUpFname;
    systemUser.UserName = this.signUpFname;
    systemUser.Password = this.signUpFname;
    systemUser.IsActive = true;
    this.systemUserDetails.push(systemUser);



  }

}

