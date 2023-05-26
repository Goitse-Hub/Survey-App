import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/_services/user.service';
import { AdduserComponent } from '../adduser/adduser.component';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})


export class UsersComponent {

  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'email',
    'dob',
    'gender',
    'education',
    'company',
    'experience',
    'package',
    'action',
  ];

  users: any;
  numUsers: any;

  constructor(private userService: UserService,  private _dialog: MatDialog, public _router: Router){}
  
  ngOnInit(){
    this.onGetUsers();
 }

  onGetUsers(): void {

    this.userService.getUsers().subscribe({
      next: (data:any) => {
        this.users = data;
        this.users.id
        this.numUsers = this.users.length
      },
      error: (err:any) => {
       
      }
   });
}

totalUsers(){
   return this.numUsers
}

onDeleteUser(_id: string): void{
 
  this.userService.deleteUser(_id).subscribe({
 
  })
  
  
  window.location.reload()
}

//Not Conneted To Frontend
onDeleteAllUsers(): void{
  
  this.userService.deleteAllUsers().subscribe({
  
  })
}

openAddEditEmpForm() {
  
  const dialogRef = this._dialog.open(AdduserComponent);
  dialogRef.afterClosed().subscribe({
    next: (val) => {
      if (val) {
        this.onGetUsers();
      }
    },
  });
}

openEditForm(data: any) {
  const dialogRef = this._dialog.open(AdduserComponent, {
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