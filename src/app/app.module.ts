import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MenuSuperiorComponent } from './componentes/menu-superior/menu-superior.component';
import { HomeComponent } from './componentes/home/home.component';
import { routing } from './app.routing';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { ContatoComponent } from './componentes/contato/contato.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { CarouselModule } from 'primeng/carousel';
import { ProdutoComponent } from './componentes/produto/produto.component';
import { LoginComponent } from './componentes/login/login.component';
import { CadastrarProdutoComponent } from './componentes/cadastrar-produto/cadastrar-produto.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatExpansionModule} from '@angular/material/expansion';
 // Import the SlickCarouselModule from the correct package



@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        MenuSuperiorComponent,
        ContatoComponent,
        RodapeComponent,
        ProdutoComponent,
        LoginComponent,
        CadastrarProdutoComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        routing,
        HttpClientModule,
        NzAvatarModule,
        CarouselModule,
        NzSelectModule,
        BrowserAnimationsModule,
        MatMenuModule,
        MatExpansionModule
        
    ],
    providers: [
    
    provideAnimationsAsync()
  ],
    bootstrap: [AppComponent]
})
export class AppModule { }
