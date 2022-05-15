import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-board-fp',
  templateUrl: './board-fp.component.html',
  styleUrls: ['./board-fp.component.css']
})
export class BoardFpComponent implements OnInit {

  formeee: any = {
    neww: null,
    confirm: null,
    code:null,
  };
  isSuccessful = false;
  isSuccessfull = false;
  isSignUpFailed = false;
  errorMessage = '';

  formee: any = {
    username: null
  };

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
  onSubmitttt(): void {
    const { neww,confirm,code } = this.formeee;
  
    this.userService.RestPassword(neww,confirm,code).subscribe(
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

  onSubmittt(): void {
    const { username } = this.formee;
  
    this.userService.demandToRestPassword(username).subscribe(
      data => {
        console.log(data);
        this.isSuccessfull = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
  
}
