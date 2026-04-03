import { Component } from '@angular/core';
import { WelcomeMessage } from '../shared/welcome-message/welcome-message';
import { UserService } from '../user/user';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [WelcomeMessage],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }
  
  constructor (private userService: UserService) {}
}
