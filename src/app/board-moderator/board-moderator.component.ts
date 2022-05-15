import { Component, OnInit } from '@angular/core';
import { Employee } from '../_services/employee';
import { UserService } from '../_services/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-board-moderator',
  templateUrl: './board-moderator.component.html',
  styleUrls: ['./board-moderator.component.css']
})
export class BoardModeratorComponent implements OnInit {

  empolyee: any = {};
  file_id: any = {};
  content?: string;
  users : any ;
  userx : any ;
  public employees: Employee[];
  public deleteEmployee?: Employee;
  id = sessionStorage.getItem("auth-id")
  page: number = 1;
  totalLenth:any;
  showModel:boolean = false


  msg = '';
  showmsg = true;
 
  formee: any = {
    username: null,
    name: null
  };
  formeee: any = {
 
    message:null
  };


  forme: any = {
    name: null
  };


  form: any = {
    username: null,
    email: null,
    password: null,
  
  };
  isSuccessful = false;
  isSuccessfull = false;
  isSuccessfulll = false;
  isSuccessfullll = false;
  isSignUpFailed = false;
  errorMessage = '';



  public editEmployee: Employee;
 

  constructor(private userService: UserService, private authService: AuthService) { }


  ngOnInit() {
 
    this.getEmployees(this.id);
  }


 
  public getEmployees(id : any): void {
    this.userService.getEmployees(id).subscribe(
      (response: Employee[]) => {
        this.employees = response;
        console.log(this.employees);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);}
    );
  }

  public searchEmployees(key: string): void {
    console.log(key);
    const results: Employee[] = [];
    for (const employee of this.employees) {
      if (employee.username.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || employee.email.toLowerCase().indexOf(key.toLowerCase()) !== -1
      ) { results.push(employee);}
    }
    this.employees = results;
    if (results.length === 0 || !key) {
      this.getEmployees(this.id);
    }
  }
  onSubmit(): void {
    const { username, email, password,file_id,sexeUser} = this.form;

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

  onSubmitt(): void {
    const { name } = this.forme;

    this.userService.addrole(name).subscribe(
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
    const { name,username } = this.formee;

    this.userService.addroleToUser(name,username).subscribe(
      data => {
        console.log(data);
        this.isSuccessfullll = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }


  




  public onAddEmloyee(addForm: NgForm): void {
    const { username, email, password,file_id,sexeUser } = this.form;
    this.authService.registeruser(username, email, password,file_id,sexeUser).subscribe(
      (response: Employee) => {
        console.log(response);
        this.getEmployees(this.id);
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
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



onSubmitttt(): void {
  const { message} = this.formeee;

  this.userService.addMAILC(message).subscribe(
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





public onOpenModal(employee: Employee, mode: string): void {
  
  this.showModel = true   
  console.log(this.showModel);
  // const container = document.getElementById('main-container');
  // const button = document.createElement('button');
  // button.type = 'button';
  // button.style.display = 'none';
  // button.setAttribute('data-toggle', 'modal');
  // if (mode === 'add') {
  //   button.setAttribute('data-target', '#addEmployeeModal');
  // }
  // if (mode === 'edit') {
  //   this.editEmployee = employee;
  //   button.setAttribute('data-target', '#updateEmployeeModal');
  // }
  // container?.appendChild(button);
  // button.click();
}


public onUpdateEmloyee(employee: Employee): void {
  this.userService.updateEmployee(employee).subscribe(
    (response: Employee) => {
      console.log(response);
      
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );
}
}

