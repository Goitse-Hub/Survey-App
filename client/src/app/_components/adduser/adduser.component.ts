import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoreService } from 'src/app/_services/core.service';
import { UserService } from 'src/app/_services/user.service';
import { AuthService } from '../../_services/auth.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  empForm: FormGroup;

  form: any = {
    username: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  education: string[] = [
    'Matric',
    'Diploma',
    'Intermediate',
    'Graduate',
    'Post Graduate',
  ];

  constructor(
    private _fb: FormBuilder,
    private _coreService: CoreService,
    private _dialogRef: MatDialogRef<AdduserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private authService: AuthService,
    private userService: UserService
  ) {
    this.empForm = this._fb.group({
      firstName: '',
      lastName: '',
      email: '',
      dob: '',
      gender: '',
      education: '',
      company: '',
      experience: '',
      package: '',
    });
  }
  users: any;
  ngOnInit(): void {
    this.empForm.patchValue(this.data);
  }
  
  onSubmit(): void {
    const { username, email, password } = this.form;
    //This Method That Returns An Observable Object (authService.register())
    this.authService.register(username, email, password).subscribe({
      next: (data) => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
       
        this.reloadPage();
        // window.location.replace("/login")
      },
      error: (err) => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }    
    });
  }
  
  reloadPage(): void {
    window.location.reload();
  }

}