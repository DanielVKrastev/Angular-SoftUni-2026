import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../user';
import { FormsModule, NgForm } from '@angular/forms';
import { EmailDirective } from '../../../directives/email';
import { EMAIL_DOMAINS } from '../../../constants';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule, EmailDirective],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  domains = EMAIL_DOMAINS;
  
  constructor(private userService: UserService, private router: Router){}

  login(form: NgForm) {
    if(form.invalid){
      console.error('Invalid Login Form!');
      return;
    }
    
    this.userService.login();
    this.router.navigate(['/home']);
  }
}
