import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { AuthGuard } from './autentica/AuthGuard';
import { HomeComponent } from './componentes/home/home.component';



export const APP_ROUTES: Routes = [
  { path:'', redirectTo:'/home',pathMatch:'full'},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
];



export const routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES);/*Parametro é a constante declarada a cima */
