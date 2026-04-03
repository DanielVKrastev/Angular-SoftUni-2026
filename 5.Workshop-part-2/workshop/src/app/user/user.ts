import { Injectable } from '@angular/core';
import { UserForAuth } from '../types/user';

@Injectable({
  providedIn: 'root',
})
export class User {
  USER_KEY = '[user]';
  user: UserForAuth | null = null;
  constructor() {
    try {

    } catch (error) {
      //this.user = undefined;
    }
  }

  login() {
    this.user = {
      firstName: 'Daniel',
      email: 'daniel@abv.,bg',
      phoneNumber: '123-123-123',
      password: '123',
      id: '1wdad2adsa2',
    }
    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
  }

  register() {

  }

  logout() {
    this.user = null;
    localStorage.removeItem(this.USER_KEY);
  }
}
