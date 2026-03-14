import { Injectable, OnDestroy } from '@angular/core';
import { SimpleUser } from '../types';

@Injectable({
  providedIn: 'root'  //global
})
export class UserService implements OnDestroy {
  appUsers: SimpleUser[] = [
    { name: 'Daniel', age: 12 },
    { name: 'Anna', age: 24 },
    { name: 'Maria', age: 34 },
  ]

  constructor() { }

    ngOnDestroy(): void {
    // Unsubscribe from events
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
