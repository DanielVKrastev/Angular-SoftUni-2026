import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../user';

@Component({
  selector: 'app-login',
  imports: [RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  constructor(private userService: UserService, private router: Router){}

  login(event: Event, emailValue: string, passwordValue: string) {
    event.preventDefault();
    
    this.userService.login();
    this.router.navigate(['/home']);
  }
}
