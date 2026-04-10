import { Injectable, OnDestroy } from '@angular/core';
import { UserForAuth } from '../types/user';

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnDestroy{
  USER_KEY = '[user]';
  user: UserForAuth | null = null;
  userSubsription = null;

  get isLogged(): boolean{
    return !!this.user;
  }

  constructor() {
    try {
      const lsUser = localStorage.getItem(this.USER_KEY) || '';
      this.user = JSON.parse(lsUser);
    } catch (error) {
      this.user = null;
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

  ngOnDestroy(): void {
    
  }
}
