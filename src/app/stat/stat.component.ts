import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import { Employee } from 'src/app/_services/employee';
@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css']
})
export class StatComponent implements OnInit {

  constructor(private userService: UserService) { }

  public employees: Employee[];

  content:any;
  contentt:any;
  contenttt:any;
  contentttt:any;
  contenttttt:any;
  contentttttt:any;

  ngOnInit(): void {
    this.nomberCompany();
    this.nomberWomen();
    this.nomberMen();
    this.nomberU();
    this.nomberUser();
    
  }
  

  public nomberWomen(): void {
    this.userService.nomberWomen().subscribe(
      data => {
        this.content = data;
        console.warn("ADMIN")
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
      );
  }


  public nomberMen(): void {
    this.userService.nomberMen().subscribe(
      data => {
        this.contentt = data;
        console.warn("ADMIN")
      },
      err => {
        this.contentt = JSON.parse(err.error).message;
      }
      
    );
  }

  public nomberU(): void {
    this.userService.nomberU().subscribe(
      data => {
        this.contenttt = data;
        console.warn("ADMIN")
      },
      err => {
        this.contenttt = JSON.parse(err.error).message;
      }


    );
  }

  public nomberCompany(): void {
    this.userService.nomberCompany().subscribe(
      data => {
        this.contentttt = data;
        console.warn("ADMIN")
      },
      err => {
        this.contentttt = JSON.parse(err.error).message;
      }
    );
  }

  public nomberUser(): void {
    this.userService.nomberUser().subscribe(
      data => {
        this.contenttttt = data;
        console.warn("ADMIN")
      },
      err => {
        this.contenttttt = JSON.parse(err.error).message;
      }
    );
  }


}
