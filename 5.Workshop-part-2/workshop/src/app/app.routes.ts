import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Error } from './error/error';
import { Login } from './user/login/login';
import { Register } from './user/register/register';
import { Profile } from './user/profile/profile';
import { AddTheme } from './theme/add-theme/add-theme';
import { MainComponent } from './main/main.component';
import { CurrentTheme } from './theme/current-theme/current-theme';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: Home },
    // User routing
    { path: 'login', component: Login },
    { path: 'register', component: Register },
    { path: 'profile', component: Profile },
    ///
    // Theme routing
    { path: 'themes', children: [
        { path: '', component: MainComponent },
        { path: ':themeId', component: CurrentTheme, canActivate: [AuthGuard]  },
    ] },
    { path: 'add-theme', component: AddTheme, canActivate: [AuthGuard] },
    //

    { path: '404', component: Error },
    { path: '**', redirectTo: '/404' },
];
