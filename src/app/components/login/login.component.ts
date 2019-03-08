import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service'
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { auth } from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth,private router: Router) { }

  ngOnInit() {
  }

onLoginFacebook(){
  this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());
  this.router.navigate(['admin/list-books']);
}

onLoginGoogle(){
  this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  this.router.navigate(['admin/list-books']);
}

  onLogout() {
    this.afAuth.auth.signOut();
  }

}
