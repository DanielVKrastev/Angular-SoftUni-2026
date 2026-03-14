import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { SimpleUser } from './types';
import { UserService } from './user-list/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserListComponent],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'demo-app';

  users: SimpleUser[] = [];

  constructor(private userService: UserService) {
    this.users = userService.appUsers;
  }

  handleClick() {
    this.title = 'ZDR';
  }

  addSimpleUser(inputName: HTMLInputElement,
    inputAge: HTMLInputElement){
      // validate input
    this.userService.addUser(inputName, inputAge)
  }
}
