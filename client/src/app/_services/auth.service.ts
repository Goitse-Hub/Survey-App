// This Service Will Sends Signup And Login HTTP POST Requests To Backend.

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// auth.service Will Use Angular HttpClient ($http service) To Make Authentication Requests.

const AUTH_API = 'http://localhost:8080/api/auth/';

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
  //This Is Binded To Register Component
  //It Has Subscribed To The Observable
  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      email,
      password
    }, httpOptions);
  }

  requestPasswordReset(data:any): Observable<any> {
    return this.http.post(AUTH_API + 'requestPasswordReset',data);
  }
 
  
  resetPassword(data:any): Observable<any> {
    return this.http.post(AUTH_API + 'resetPassword', data);
  }


  // requestNewPassword(data:any): Observable<any> {
  //   return this.http.post(AUTH_API + 'requestNewPassword',data);
  // }
 
  
  // createNewPassword(data:any): Observable<any> {
  //   return this.http.post(AUTH_API + 'createNewPassword', data);
  // }

}
