import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8089/api/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username,
      password
    }, httpOptions);
  }

  register(username: string, email: string, password: string, companyName: string,localisationCompany: string,phoneNumberUser: number,file_id : any,sexeUser: any): Observable<any> {
    return this.http.post(AUTH_API + 'register/'+file_id, {
      username,
      email,
      password,
      companyName,
      localisationCompany,
      phoneNumberUser,
      file_id,
      sexeUser
    }, httpOptions);
  }
  registeruser(username: string, email: string, password: string,file_id : any, sexeUser: any): Observable<any> {
    return this.http.post(AUTH_API + 'company/save/'+file_id, {
      username,
      email,
      password,
      file_id,
      sexeUser,
    }, httpOptions);
  }
}