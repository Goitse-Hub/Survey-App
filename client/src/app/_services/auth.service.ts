// This Service Will Sends Signup And Login HTTP POST Requests To Backend.

import { Injectable, NgZone } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


// import { User } from './user.service';
// import * as auth from 'firebase/auth';
// import { AngularFireAuth } from '@angular/fire/compat/auth';
// import {
//   AngularFirestore,
//   AngularFirestoreDocument,
// } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';






// auth.service Will Use Angular HttpClient ($http service) To Make Authentication Requests.

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  afAuth: any;

  constructor(private http: HttpClient,  // Inject Firebase auth service
  public router: Router, public ngZone: NgZone) { }

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

//Reset Password functions


SendVerificationMail() {
  return this.afAuth.currentUser
    .then((u: any) => u.sendEmailVerification())
    .then(() => {
      this.router.navigate(['verify-email-address']);
    });
}

ForgotPassword(passwordResetEmail: string) {
  return this.afAuth
    .sendPasswordResetEmail(passwordResetEmail)
    .then(() => {
      window.alert('Password reset email sent, check your inbox.');
    })
    .catch((error: any) => {
      window.alert(error);
    });
}

get isLoggedIn(): boolean {
  const user = JSON.parse(localStorage.getItem('user')!);
  return user !== null && user.emailVerified !== false ? true : false;
}





  
}
