import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    },
    {
        path: 'signup',
        component : CadastroComponent
    }
];
