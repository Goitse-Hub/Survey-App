import { Component, Injectable } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { TokenStorageService } from '../../_services/token-storage.service';
import { ToastrService } from 'ngx-toastr';

// Login Component Calls TokenStorageService Methods To Check The LoggedIn Status And Save Token And User Info To Session Storage.

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class LoginComponent {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
username: any;

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private toastr: ToastrService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe({
      next: (data) => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        //alert("Login Successful")
        this.reloadPage();
        this.toastr.success("Login Successful")
        
       window.location.replace("/surveys")
      //return this.isLoggedIn = true
        
      },
      error: (err) => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        this.toastr.error("Login Failed, Try Again")
      },
      
   });
  }

  // isAuthenticated(): boolean{
  //   if (this.isLoggedIn = true){

  //   }
  //   return true
  // }

  reloadPage(): void {
    window.location.reload();
  }
}

