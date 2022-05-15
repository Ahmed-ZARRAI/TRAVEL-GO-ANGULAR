import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';



@Component({
  selector: 'app-add-empolyee',
  templateUrl: './add-empolyee.component.html',
  styleUrls: ['./add-empolyee.component.css']
})
export class AddEmpolyeeComponent implements OnInit {
  empolyee: any = {};
  file_id: any = {};
  content?: string;
  users : any ;
  userx : any ;
 

    form: any = {
    username: null,
    email: null,
    password: null,
  
  };

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';


  constructor(private authService: AuthService) { }

  ngOnInit(): void {
 
  }

  onSubmit(): void {
    const { username, email, password,file_id,sexeUser } = this.form;

    this.authService.registeruser(username, email, password,file_id,sexeUser).subscribe(
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
