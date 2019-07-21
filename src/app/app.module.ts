import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';
import { MembersComponent } from './members/members.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyA7Vrt7_W89bwKGPabK3eahBiEnBRHvIV8',
  authDomain: 'nimedco-pharmacy.firebaseapp.com',
  databaseURL: 'https://nimedco-pharmacy.firebaseio.com',
  storageBucket: 'nimedco-pharmacy.appspot.com',
  messagingSenderId: '186334638758'
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    EmailComponent,
    MembersComponent
  ],

  imports: [
    BrowserModule,
    
    AngularFireModule.initializeApp(firebaseConfig)
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
