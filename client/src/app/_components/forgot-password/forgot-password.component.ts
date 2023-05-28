import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent {
  form = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
  });

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.form.status === 'INVALID') {
      Swal.fire({
        title: 'Failed!',
        text: 'Please enter valid email',
        icon: 'error',
        confirmButtonText: 'OK',
      }).then((result) => {});
      return;
    }
    this.authService.requestPasswordReset(this.form.value).subscribe((data: any) => {
      this.onSubmitSuccessAlert();
    });
  }
  onSubmitSuccessAlert() {
    Swal.fire({
      title: 'Reset Password request',
      text: 'You have successfully submitted your request',
      icon: 'success',
      confirmButtonText: 'OK',
    });
  }
}
