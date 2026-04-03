import { Component } from '@angular/core';
import { ThemesList } from '../theme/themes-list/themes-list';
import { PostsList } from '../posts-list/posts-list';
import { WelcomeMessage } from "../shared/welcome-message/welcome-message";
import { UserService } from '../user/user';

@Component({
  selector: 'app-main',
  imports: [ThemesList, PostsList, WelcomeMessage],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
    get isLoggedIn(): boolean {
      return this.userService.isLogged;
    }
    
    constructor (private userService: UserService) {}
}
