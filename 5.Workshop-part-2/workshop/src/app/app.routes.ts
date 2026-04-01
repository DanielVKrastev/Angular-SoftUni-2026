import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Error } from './error/error';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: '404', component: Error },
    { path: '**', redirectTo: '/404' },
];
