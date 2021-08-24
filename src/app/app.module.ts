import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment} from './../environments/environment'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { HomeComponent } from './pages/home/home.component';

import {HttpClientModule } from "@angular/common/http"
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';


import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PreviewComponent } from './pages/preview/preview.component';
import { ModelComponent } from './modelcomponent/model/model.component';
import { CardComponent } from './card/card/card.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';




@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PreviewComponent,
    ModelComponent,
    CardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FormsModule,
    AngularFireAuthModule,
    ToastrModule.forRoot(),
    AppRoutingModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
