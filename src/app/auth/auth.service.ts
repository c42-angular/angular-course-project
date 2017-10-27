import * as firebase from 'firebase';

export class AuthService {
  // firebase module initialised in app.component
  signup(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch((error) => console.log(error));
  }
}
