import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  userId:any
  // form = new FormGroup({
  //   userId: new FormControl (''),
  //   password: new FormControl('', Validators.required),
  //   confirmPassword: new FormControl('', Validators.required)
  // })
  form: any = {
    userId: null,
    password: null,
    confirmPassword: null
  };
  constructor(private activatedRoute: ActivatedRoute, private authService: AuthService, private router:Router) {}
     
  ngOnInit(): void {
      this.activatedRoute.paramMap.subscribe((params) => {
        this.userId= params.get('userid');
        
      });
    }
  
      onSubmit() {
        
        

        if (this.form.status === "INVALID") {
          Swal.fire({
            title: 'Failed!',
            text: 'Please enter password',
            icon: 'error',
            confirmButtonText: 'OK',
          }).then((result) => {
          })
          return;
        }

        else if (this.form.value.password !== this.form.value.confirmPassword) {
          Swal.fire({
            title: 'Failed!',
            text: "Password doesn't match",
            icon: 'error',
            confirmButtonText: 'OK',
          }).then((result) => {
          })
          return;
        }
        this.form.value["userId"] = this.userId;
        this.authService.resetPassword(this.form.value).subscribe((data: any) => {this.onSubmitSuccessAlert();
        })
      }
        onSubmitSuccessAlert() {
            Swal.fire({
              title: 'Reset Password request',
              text: 'You have successfully submitted your request',
              icon: 'success',
              confirmButtonText: 'OK',
            }).then((result) => {
              if (result.value) {
                this.router.navigate(["/login"])
              }
            })
          }
         
}
