// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-forgot-password',
//   templateUrl: './forgot-password.component.html',
//   styleUrls: ['./forgot-password.component.scss']
// })
// export class ForgotPasswordComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  constructor(
    public authService: AuthService
  ) { }
  ngOnInit() {
  }
}
