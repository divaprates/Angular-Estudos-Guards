import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Login } from './components/login/login';
import { Produtos } from './components/produtos/produtos';
import { Sobre } from './components/sobre/sobre';

export const routes: Routes = [
    {
        path: 'home',
        component: Home
    },
    {
        path: 'sobre',
        component: Sobre
    },
    {
        path: 'produtos',
        component: Produtos
    },
    {
        path: 'login',
        component: Login
    }
];
