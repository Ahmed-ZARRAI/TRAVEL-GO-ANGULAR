import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-reclam',
  templateUrl: './reclam.component.html',
  styleUrls: ['./reclam.component.css']
})
export class ReclamComponent implements OnInit {

  formeee: any = {
    email: null,
    name: null,
    message:null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }


  onSubmitttt(): void {
    const { name,email,message} = this.formeee;
  
    this.userService.addMAIL(name,email,message).subscribe(
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
