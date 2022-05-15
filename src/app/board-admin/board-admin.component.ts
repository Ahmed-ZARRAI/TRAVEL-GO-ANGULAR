import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { Employee } from '../_services/employee';
import { AuthService } from '../_services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {
  [x: string]: any;
  content?: string;
  public employees: Employee[] = [];
  page: number = 1;
  totalLenth:any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  
     this.getAllUsers();
    
    this.userService.test().subscribe(resp => {
      console.warn('hjklmùmlkjb',resp.body)
      console.warn('resp',resp)
      

    })
    this.userService.getAdminBoard().subscribe(
      data => {
        this.content = data;
        console.warn("ADMIN")
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
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
      this.getAllUsersCompany();
    }
  }

  public getAllUsers(): void {
    this.userService.getAllUsers().subscribe(
      (response: Employee[]) => {
        this.totalLenth = response.length;
        this.employees = response;
        console.log(this.employees);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);}
    );
  }
}
