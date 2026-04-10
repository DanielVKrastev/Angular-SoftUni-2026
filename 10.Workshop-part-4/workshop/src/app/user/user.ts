import { Injectable, OnDestroy } from '@angular/core';
import { UserForAuth } from '../types/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subscription, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnDestroy{
  private user$$ = new BehaviorSubject<UserForAuth | null>(null);
  public user$ = this.user$$.asObservable();

  USER_KEY = '[user]';
  user: UserForAuth | null = null;
  userSubsription: Subscription | null = null;

  get isLogged(): boolean{
    return !!this.user;
  }

  constructor(private http: HttpClient) {
    this.userSubsription = this.user$.subscribe((user) => {
      this.user = user;
    })
  }

  login(email: string, password: string) {
    // this.user = {
    //   firstName: 'Daniel',
    //   email: 'daniel@abv.,bg',
    //   phoneNumber: '123-123-123',
    //   password: '123',
    //   id: '1wdad2adsa2',
    // };

    // localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
    return this.http
      .post<UserForAuth>('/api/login', { email, password })
      .pipe(tap((user) => this.user$$.next(user)));
  }

  register(username: string, email: string, tel: string, password: string, rePassword: string) {
    return this.http
      .post<UserForAuth>('/api/register', { username, email, tel, password, rePassword })
      .pipe(tap((user) => this.user$$.next(user)));
  }

  logout() {
    return this.http
    .post('/api/logout', {})
    .pipe(tap((user) => this.user$$.next(null)));
  }

  getProfile() {
    return this.http
      .get<UserForAuth>('/api/users/profile')
      .pipe(tap((user) => this.user$$.next(user)));;
  }

  updateProfile(username: string, email: string, tel?:string){
    return this.http
      .put<UserForAuth>('/api/users/profile', {
        username,
        email,
        tel,
      })
      .pipe(tap((user) => this.user$$.next(user)));;
  }

  ngOnDestroy(): void {
    //console.log('onDestroy: ', this.userSubsription);
    this.userSubsription?.unsubscribe();
  }
}
