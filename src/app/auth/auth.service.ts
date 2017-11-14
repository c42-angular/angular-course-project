import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  token = null;

  constructor(private router: Router) {
  }

  // firebase module initialised in app.component
  signup(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch((error) => console.log(error));
  }

  signin(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(response => {
        this.router.navigate(['/']);
        firebase.auth().currentUser.getToken()
          .then((token: string) => this.token = token);
      })
      .catch(error => console.log(error));
  }

  getToken() {
    firebase.auth().currentUser.getToken()
      .then((token: string) => this.token = token);

    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

  logout() {
    firebase.auth().signOut()
      .then(fulfilled => {
        this.token = null;
        console.log('Logged out'); })
      .catch(error => console.log(error));
  }
}
