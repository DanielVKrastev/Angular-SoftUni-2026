import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Error } from './error/error';
import { Login } from './user/login/login';
import { Register } from './user/register/register';
import { Profile } from './user/profile/profile';
import { ThemesList } from './theme/themes-list/themes-list';
import { AddTheme } from './theme/add-theme/add-theme';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: Home },
    // User routing
    { path: 'login', component: Login },
    { path: 'register', component: Register },
    { path: 'profile', component: Profile },
    ///
    // Theme routing
    { path: 'themes', component: ThemesList },
    { path: 'add-theme', component: AddTheme },
    //

    { path: '404', component: Error },
    { path: '**', redirectTo: '/404' },
];
