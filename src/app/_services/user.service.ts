import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';


const API_URL = 'http://localhost:8089/api/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'company', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }

  test(): Observable<any> {
    return this.http.get(API_URL + 'retrieve-user-by-sexe/Women');
  }

  public getAllUsers(): Observable<Employee[]>{
    return this.http.get<Employee[]>(API_URL + 'company/users')
  }


  public getEmployees(id : any): Observable<Employee[]> {
    return this.http.get<Employee[]>(API_URL + "retrieve-user-by-company/" + id);
  }

  public addrole(name: string): Observable<any> {
    return this.http.post(API_URL + 'company/Role/save',{name});
  }

  public addroleToUser(name: string,username: string): Observable<any> {
    return this.http.post(API_URL + 'company/Role/addtouser',{name,username});
  }

  updateUser(employee: Employee, id : any) : Observable<Employee>{
    return this.http.put<Employee>(API_URL + "company/update/user/" + id, employee);
  }

 

  public addMAIL(name: string,email: string,message: string): Observable<any> {
    return this.http.post(API_URL + 'email/save',{name,email,message});
  }
  public addMAILC(message: string): Observable<any> {
    return this.http.post(API_URL + 'email/save/C',{message});
  }

  public demandToRestPassword(username: any): Observable<any> {
    return this.http.get(API_URL + "rssest-paword/" +username);
  }


  public RestPassword(neww: any,confirm: any,code:any): Observable<any> {
    return this.http.get(API_URL + "confirm-password/" +neww+'/'+confirm+code);
  }






    //STAT

    public nomberWomen(): Observable<[]>{
      return this.http.get<[]>(API_URL + 'admin/number-women')
    }

    public nomberMen(): Observable<[]>{
      return this.http.get<[]>(API_URL + 'admin/number-men')
    }

    public nomberU(): Observable<[]>{
      return this.http.get<[]>(API_URL + 'admin/number')
    }

    public nomberCompany(): Observable<[]>{
      return this.http.get<[]>(API_URL + 'admin/number-company')
    }

    public nomberUser(): Observable<[]>{
      return this.http.get<[]>(API_URL + 'admin/number-user')
    }
    public addEmployee(employee: Employee): Observable<Employee> {
      return this.http.post<Employee>(API_URL + 'register/', employee);
    }


    public updateEmployee(employee: Employee): Observable<Employee> {
      return this.http.put<Employee>(API_URL + 'register/', employee);
    }
}
