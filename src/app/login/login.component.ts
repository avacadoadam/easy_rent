import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {FirebaseCollectionService} from '../Services/firebase-collection.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  error: string;
  rForm: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router, private db: FirebaseCollectionService) {
    this.rForm = fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.compose([Validators.required, Validators.minLength(8)])],
    });
  }


  emailLogin() {
    this.auth.emailLoginPromise(this.rForm.get('email').value, this.rForm.get('password').value).then(User => {
      this.CheckLogin(User);
    }).catch(err => {
        this.error = err;
      }
    );
  }

  facebookLogin() {
    this.auth.facebookLoginPromise().then(User => {
      this.CheckLogin(User);
    }).catch(err => {
      this.error = err;
    });
  }

  GoogleLogin() {
    this.auth.GoogleLoginPromise().then(User => {
      this.CheckLogin(User);
    }).catch(err => {
      this.error = err;
    });
  }

  private CheckLogin(User) {

    if (!User.user) {
      this.error = 'Could Not find your account';
      return;
    }
    if (!this.db.checkIfUserExists(User.user.uid)) {
      this.error = 'Could Find Account';
      return;
    }
    this.navToAccount();
  }


  private navToAccount() {
    this.router.navigate(['/account']);
  }

}
