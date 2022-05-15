import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent implements OnInit {

  forme: any = {
    name: null
  };
  isSuccessful = false;
  isSuccessfull = false;
  isSignUpFailed = false;
  errorMessage = '';
  formee: any = {
    username: null,
    name: null
  };
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }


  onSubmitt(): void {
    const { name } = this.forme;

    this.userService.addrole(name).subscribe(
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
  onSubmittt(): void {
    const { name,username } = this.formee;

    this.userService.addroleToUser(name,username).subscribe(
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
