import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';

// Home Component Will Use UserService To Get Public Resources From The Backend

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content?: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getPublicContent().subscribe({
      next: (data) => {
        this.content = data;
      },
      error: (err) => {
        this.content = JSON.parse(err.error).message;
      }
    });
  }
}
