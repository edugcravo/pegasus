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


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        MenuSuperiorComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        routing,
        HttpClientModule,
        NzAvatarModule
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
