import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user';

@Component({
  selector: 'app-authenticate',
  standalone: true,
  imports: [],
  templateUrl: './authenticate.html',
  styleUrl: './authenticate.css',
})
export class AuthenticateComponent implements OnInit{
  isAuth = true;

  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.userService.getProfile().subscribe({
      next: () => {
        this.isAuth = false;
      },
      error: () => {
        this.isAuth = false;
      },
      complete: () => {
        this.isAuth = false;
      }
    });
  } 

}
