import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { routing } from './app.routing';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { CarouselModule } from 'primeng/carousel';
import { LoginComponent } from './componentes/login/login.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatExpansionModule} from '@angular/material/expansion';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzModalModule } from 'ng-zorro-antd/modal';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatChipsModule} from '@angular/material/chips';
import { MatTableModule } from '@angular/material/table'; // Importando o MatTableModule
import { HomeComponent } from './componentes/home/home.component';
import {MatSelectModule} from '@angular/material/select';
import { ModalPreencherComponent } from './componentes/modal-preencher/modal-preencher.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { HeaderComponent } from './componentes/header/header.component';

 // Import the SlickCarouselModule from the correct package



@NgModule({
    declarations: [
        AppComponent,
        RodapeComponent,
        LoginComponent,
        HomeComponent,
        ModalPreencherComponent,
        HeaderComponent
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
        MatExpansionModule,
        NzUploadModule,
        NzModalModule,
        MatIconModule,
        MatButtonToggleModule,
        MatTooltipModule,
        MatChipsModule,
        MatTableModule,
        MatSelectModule,
        MatDialogModule,
        MatInputModule
        
    ],
    providers: [
    
    provideAnimationsAsync()
  ],
    bootstrap: [AppComponent]
})
export class AppModule { }
