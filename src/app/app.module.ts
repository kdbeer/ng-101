import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './services/login.service';
import { AngularFireModule } from '@angular/fire';
import { FIREBASE } from './class/firebase';
import { AngularFirestore } from '@angular/fire/firestore';
import { LogupComponent } from './components/logup/logup.component';
import { BookingComponent } from './components/booking/booking.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormsModule } from '@angular/forms';
import { BookprofileComponent } from './components/bookprofile/bookprofile.component'
import { HomeComponent } from './components/home/home.component';
import { UsercompleteComponent } from './components/usercomplete/usercomplete.component';

import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogupComponent,
    BookingComponent,
    ScheduleComponent,
    ContactComponent,
    BookprofileComponent,
    HomeComponent,
    UsercompleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(FIREBASE.firebase , 'angular-auth-firebase'),
    FormsModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule
    ],
  providers: [LoginService,AngularFirestore,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
