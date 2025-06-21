import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Login } from './components/login/login';
import { Produtos } from './components/produtos/produtos';
import { Sobre } from './components/sobre/sobre';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'sobre',
        component: Sobre
    },
    {
        path: 'produtos',
        component: Produtos,
        canActivate: [authGuard]
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: '**',
        redirectTo: ''
    }
];
