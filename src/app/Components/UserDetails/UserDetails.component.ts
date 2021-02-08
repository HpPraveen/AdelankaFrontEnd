import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import notify from 'devextreme/ui/notify';
import { SharedService } from 'src/app/Services/Shared.service';
import { SystemUserDetails } from 'src/app/Models/SystemUserDetails';
import { SystemUserService } from 'src/app/Services/system-user-service';

@Component({
  selector: 'app-UserDetails',
  templateUrl: './UserDetails.component.html',
  styleUrls: ['./UserDetails.component.css']
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
  userDetails: SystemUserDetails;
  systemUserDetails: Array<SystemUserDetails> = [];


  constructor(private systemUserService: SystemUserService, private sharedService: SharedService, private router: Router) { }

  ngOnInit(){
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
    if (this.signInUsername === null || this.signInUsername === '' || this.signInPsw === null || this.signInPsw === '' ) {
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
      this.systemUserService.GetSystemUserByUserNameAndPassword(this.signInUsername, this.signInPsw).subscribe((c) => {
        const userDetail = JSON.parse(JSON.stringify(c));
        if (userDetail.length !== 0) {
          this.sharedService.loggedUser = userDetail[0].firstName + ' ' + userDetail[0].lastName;
          this.router.navigate(['/createNote']);
          notify(
            {
              message: 'Successfully Sign In',
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
              message: 'Check the Username & Password',
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

  SignUpClick(e) {

    this.userDetails = {
      FirstName: this.signUpFname,
      LastName: this.signUpLname,
      Email: this.signUpEmail,
      UserName: this.signUpUsername,
      Password: this.signUpPsw,
      IsActive: true
     };

    this.systemUserService.AddNewUserDetails(this.userDetails).subscribe((c) => {
      if (c === true) {
        notify(
          {
            message: 'Successfully Sign Up',
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
        window.location.reload();
      }
      else if (c === false) {
        notify(
          {
            message: 'Sign Up Faild',
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
    },
    (err) => {

      notify(
        {
          message: 'Save Unsuccess (Fill the all fields)',
          position: {
            my: 'top center',
            at: 'top center',
            offset: '10 50',
          },
          width: '800px',
        },
        'error',
        5000
      );
    }
    );



  }

}
