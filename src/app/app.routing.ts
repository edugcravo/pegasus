import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuSuperiorComponent } from './componentes/menu-superior/menu-superior.component';
import { HomeComponent } from './componentes/home/home.component';
import { ContatoComponent } from './componentes/contato/contato.component';
import { ProdutoComponent } from './componentes/produto/produto.component';
import { LoginComponent } from './componentes/login/login.component';
import { CadastrarProdutoComponent } from './componentes/cadastrar-produto/cadastrar-produto.component';
import { CategoriasComponent } from './componentes/categorias/categorias.component';



export const APP_ROUTES: Routes = [
  { path:'', redirectTo:'/home',pathMatch:'full'},
  { path: 'home', component: HomeComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'produto', component: ProdutoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastra', component: CadastrarProdutoComponent },
  { path: 'categorias', component: CategoriasComponent }
];



export const routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES);/*Parametro é a constante declarada a cima */
