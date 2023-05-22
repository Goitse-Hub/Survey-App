import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';

const SURVEY_ID = 0;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('admin');
      this.showModeratorBoard = this.roles.includes('moderator');
      
      this.username = user.username;

      if(this.username === 'groupcfs'){
        this.showAdminBoard = true
        this.showModeratorBoard = false
      }
    }

    
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
