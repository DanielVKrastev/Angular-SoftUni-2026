import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { SimpleUser } from './types';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'demo-app';
  appUsers: SimpleUser[] = [
    { name: 'Daniel', age: 12 },
    { name: 'Anna', age: 24 },
    { name: 'Maria', age: 34 },
  ]

  handleClick() {
    this.title = 'ZDR';
  }

  addUser(inputName: HTMLInputElement, inputAge: HTMLInputElement) {
    // console.log(inputName.value);
    // console.log(inputAge.value);

    const user = { 
      name: inputName.value, 
      age: Number(inputAge.value) 
    }
    this.appUsers.push(user);
    //this.appUsers = [...this.appUsers, user]; //!Important hack
    inputName.value = '';
    inputAge.value = '';

    console.log(this.appUsers);
    
  }
}
