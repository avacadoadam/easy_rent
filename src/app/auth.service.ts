import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isUserLoggedIn;

  constructor(private afAuth: AngularFireAuth) {
    afAuth.auth.onAuthStateChanged(user => {
      if (user) {
        this.isUserLoggedIn = true;
      } else {
        this.isUserLoggedIn = false;
      }
    });
  }

  emailLoginPromise(email, password): Promise<firebase.auth.UserCredential> {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  UserObservable() {
    return this.afAuth.user;

  }

  doFacebookLogin() {
    return new Promise<any>((resolve, reject) => {
      const provider = new firebase.auth.FacebookAuthProvider();
      this.afAuth.auth
        .signInWithPopup(provider)
        .then(res => {
          resolve(res);
          console.log(res);
        }, err => {
          console.log(err);
          reject(err);
        });
    });
  }

  facebookLoginPromise() {
    return this.afAuth.auth
      .signInWithPopup(new firebase.auth.FacebookAuthProvider());

  }

  doGoogleLogin() {
    return new Promise<any>((resolve, reject) => {
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.afAuth.auth
        .signInWithPopup(provider)
        .then(res => {
          console.log(res);
          resolve(res);
        }, err => {
          console.log(err);
          reject(err);
        });
    });
  }

  public GoogleLoginPromise() {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    return this.afAuth.auth
      .signInWithPopup(provider);
  }

  public doRegisterEmail(value) {
    return firebase.auth().createUserWithEmailAndPassword(value.email, value.password);
  }

  public logOut(): boolean {
    this.afAuth.auth.signOut().then(() => {
      return true;
    });
    return false;
  }
}
