import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from 'src/app/_services/user.service';
import { AuthService } from '../../_services/auth.service';
import { CoreService } from 'src/app/_services/core.service';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent {
  empForm: FormGroup;
  users: any;
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
    private _dialogRef: MatDialogRef<UpdateuserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private authService: AuthService,
    private userService: UserService
  ) {
    this.empForm = this._fb.group({
      username: String,
      email: String,
    });
  }

  ngOnInit(): void {
    this.empForm.patchValue(this.data);
  }
  onFormSubmit() {
    

    // if (this.empForm.valid) {
    //   if (this.data) {
    //     this.userService
    //       .updateUser(this.data.id, this.empForm.value)
    //       .subscribe({
    //         next: (val: any) => {
    //           this._coreService.openSnackBar('Employee detail updated!');
    //           this._dialogRef.close(true);
    //         },
    //         error: (err: any) => {
    //           console.error(err);
    //         },
    //       });
    //   } else {
    //     this.userService.addUser(this.empForm.value).subscribe({
    //       next: (val: any) => {
    //         this._coreService.openSnackBar('Employee added successfully');
    //         this._dialogRef.close(true);
    //       },
    //       error: (err: any) => {
    //         console.error(err);
    //       },
    //     });
    //   }
    // }
  };

//asdasd



//   : void {
//     const { username, email } = this.form
//     this.userService.updateUser(username, email).subscribe({
//       next: (data) => {
//         this.users = data;
//         this.users._id
        
//       },
//       error: (err:any) => {
       
//       }
//    });
// }


onUpdateUser(){
  if (this.empForm.valid) {
    if (this.data) {
      this.userService
        .updateUser(this.data._id, this.empForm.value)
        .subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Employee detail updated!');
            this._dialogRef.close(true);
            window.location.reload()
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }
    }
  };
  


reloadPage(): void {
    window.location.reload();
  }
}