import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../_services/token-storage.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
import { UserService } from 'src/app/_services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdateuserComponent } from '../updateuser/updateuser.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;

  constructor(private token: TokenStorageService, public _router: Router, private userService: UserService,  private _dialog: MatDialog) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
  }
//   numList: any[]=[];

//   async addnumber() {
//   const { value: formValues } = await Swal.fire({
//     title: 'Update Details',
//     html:
//       '<label id="swal-label1"> Username' +  
//       '<input id="swal-input1" class="swal2-input">' +
//       '<label id="swal-label2"> Email Address' +
//       '<input id="swal-input2" class="swal2-input">' +
//       '<label id="swal-label3"> Password' +
//       '<input id="swal-input3" class="swal2-input">' +
//       '<label id="swal-label4">Confirm ' +
//       '<input id="swal-input4" class="swal2-input">',
//     focusConfirm: false,
    
//   })
  
//   if (formValues) {
//     Swal.fire(JSON.stringify(formValues))
//   }

// }

users: any;
onGetUsers(): void {

  this.userService.getUsers().subscribe({
    next: (data:any) => {
      this.users = data;
      this.users.id

    },
    error: (err:any) => {
     
    }
 });
}

openAddEditEmpForm() {
  
  const dialogRef = this._dialog.open(UpdateuserComponent);
  dialogRef.afterClosed().subscribe({
    next: (val) => {
      if (val) {
        this.onGetUsers();
      }
    },
  });
}

openEditForm(data: any) {
  const dialogRef = this._dialog.open(UpdateuserComponent, {
    data,
  });

  dialogRef.afterClosed().subscribe({
    next: (val) => {
      if (val) {
        this.onGetUsers();
      }
    },
  });

}
}