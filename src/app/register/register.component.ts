import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {
    username: null,
    email: null,
    password: null,
    companyName: null,
    localisationCompany: null,
    phoneNumberUser: null,
    sexeUser:null

  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  title = 'File Upload';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { username, email, password,companyName,localisationCompany,phoneNumberUser,file_id,sexeUser } = this.form;

    this.authService.register(username, email, password,companyName,localisationCompany,phoneNumberUser,file_id,sexeUser).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
