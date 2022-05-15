import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { Employee } from '../_services/employee';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
 
})
export class BoardUserComponent implements OnInit {
  content?: string;
  empolyee: any = {};
  employees: Employee[];
  namee: any
  id = sessionStorage.getItem("auth-id")



  msg = '';
  showmsg = true;

  formee: any = {
    username: null
  };

  formeee: any = {
    neww: null,
    confirm: null,
    code:null,
  };


  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUserBoard().subscribe(
      data => {
        this.content = data;
        console.warn("USDER")
      },
      err => {
        console.warn("pppppppp")
      }
    );
  }


  updateProfile(empolyee: Employee, id: any) {
  
    this.userService.updateUser(empolyee, id).subscribe(data => {
      this.msg = "Profile Updated Succefully !"
      this.showmsg = false;
      empolyee = data;
      return empolyee;
    })
}


onSubmittt(): void {
  const { username } = this.formee;

  this.userService.demandToRestPassword(username).subscribe(
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


public onOpenModal(employee: Employee, mode: string): void {
  const containe = document.getElementById('main-container');
  const button = document.createElement('button');
  button.type = 'button';
  button.style.display = 'none';
  button.setAttribute('data-toggle', 'modal');
  if (mode === 'add') {
    button.setAttribute('data-target', '#addEmployeeModal');
  }
  containe?.appendChild(button);
  button.click();
}


public onAddEmloyee(addForm: NgForm): void {
  document.getElementById('add-employee-form')?.click();
  this.userService.addEmployee(addForm.value).subscribe(
    (response: Employee) => {
      console.log(response);
     
      addForm.reset();
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
      addForm.reset();
    }
  );
}

}
