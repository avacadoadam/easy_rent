import {Component, EventEmitter, Output} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-add-verification',
  templateUrl: './add-verification.component.html',
  styleUrls: ['./add-verification.component.scss']
})
export class AddVerificationComponent {

  @Output() next: EventEmitter<any> = new EventEmitter();

  isPhoneVerified = false;
  isGoogleVerified = false;
  isFacebookVerified = false;
  isEmailVerified = false;
  phoneNumber: string;

  constructor(public afAuth: AngularFireAuth) {
    this.afAuth.user.subscribe(user => {
      this.isPhoneVerified = this.afAuth.auth.currentUser.phoneNumber != null;
      this.isEmailVerified = this.afAuth.auth.currentUser.emailVerified;
      this.afAuth.auth.currentUser.providerData.forEach(provider => {
        if (provider.providerId === 'google.com') {
          this.isGoogleVerified = true;
        }
        console.log(provider);
      });
    });
  }

  recaptcha(type: string) {


  }


  addFacebook() {
    this.afAuth.auth.currentUser.linkWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(res => {
        this.isFacebookVerified = true;
        console.log(res);
      }).catch(err => {
      console.log(err);
    });
  }

  addGoogle() {
    this.afAuth.auth.currentUser.linkWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(res => {
        this.isGoogleVerified = true;
        console.log(res);
      }).catch(err => {
      console.log(err);
    });
  }

  finished() {
    this.next.emit();
  }

  VerifyPhone() {
    return;
    // window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('phoneVerifyReCapthcha', {
    //   size: '200',
    //   callback: (res) => {
    //     firebase.auth().signInWithPhoneNumber(this.phoneNumber, window.recaptchaVerifier)
    //       .then(confirmationResult => {
    //         console.log('success' + confirmationResult);
    //         // SMS sent. Prompt user to type the code from the message, then sign the
    //         // user in with confirmationResult.confirm(code).
    //         // window.confirmationResult = confirmationResult;
    //       }).catch(error => {
    //       console.log('error');
    //     });
    //   }
    // });

  }


  verifyPhone() {
    console.log(this.phoneNumber);
  }
}
