// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-verify-email',
//   templateUrl: './verify-email.component.html',
//   styleUrls: ['./verify-email.component.scss']
// })
// export class VerifyEmailComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }


import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent implements OnInit {
  constructor(
    public authService: AuthService
  ) { }
  ngOnInit() {
  }
}