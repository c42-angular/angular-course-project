import * as firebase from 'firebase';
import { Response } from '@angular/http';

export class AuthService {
  token = '';
  // firebase module initialised in app.component
  signup(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch((error) => console.log(error));
  }

  signin(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(response => {
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
}
