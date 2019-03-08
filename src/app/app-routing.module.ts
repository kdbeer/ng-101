import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LogupComponent } from './components/logup/logup.component';
import { BookingComponent } from './components/booking/booking.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { ContactComponent } from './components/contact/contact.component';
import { BookprofileComponent } from './components/bookprofile/bookprofile.component';
import { HomeComponent } from './components/home/home.component';
import { UsercompleteComponent } from './components/usercomplete/usercomplete.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'logup', component: LogupComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'contact', component: ContactComponent },
  // { path: 'bookprofile', component: BookprofileComponent },
  { path: 'bookprofile/:id', component: BookprofileComponent },
  { path: 'home', component: HomeComponent },
  { path: 'usercomplete', component: UsercompleteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
