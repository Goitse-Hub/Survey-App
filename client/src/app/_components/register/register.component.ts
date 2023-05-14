import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  form: any = {
    username: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private toastr: ToastrService, public _router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { username, email, password } = this.form;
    //This Method That Returns An Observable Object (authService.register())
    this.authService.register(username, email, password).subscribe({
      next: (data) => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        // this.reloadPage();
        this.toastr.success("Registration Was Successful")
        
        // window.location.replace("/login")
        Swal.fire({
          title: 'Registration Was Successful',
           text: 'You can now login!',
          icon: 'success',
          confirmButtonText: 'Login',
        }).then((result)=>{
          if (result.value){
            this._router.navigate(["/login"])
            
          }})
         
      },
      error: (err) => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
        this.toastr.error("Registration Failed, Try Again")
      }
    });
  }
}