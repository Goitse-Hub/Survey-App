import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
// We Will Use user.service To Get Access To Publoc And Protected Resources From API

const API_URL = 'http://localhost:8080/api/test/';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  public account: any = []
  public userList = new BehaviorSubject<any>([])

  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }

  getUsers(): Observable<any> {
    return this.http.get('http://localhost:8080/api/auth/all', { responseType: 'json' });
  }


  deleteUser(_id: string): Observable<any> {
    return this.http.delete('http://localhost:8080/api/auth/' + _id, { responseType: 'json' });
  }

  deleteAllUsers(): Observable<any> {
    return this.http.delete('http://localhost:8080/api/auth/all', { responseType: 'json' });
  }

  //add user and update details

  addUser(data: any): Observable<any> {
    return this.http.post('http://localhost:8080/api/auth/signup', data);
  }

  updateUser(_id: string, data: any): Observable<any> {
    return this.http.put(`http://localhost:8080/api/auth/${_id}`, data);
  }

}
