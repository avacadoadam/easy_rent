import {Component, ViewChild} from '@angular/core';
import {AuthService} from '../../auth.service';
import {FirebaseCollectionService} from '../../Services/firebase-collection.service';
import {MatDialog, MatSnackBar, MatStepper} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-choose-account-type',
  templateUrl: './choose-account-type.component.html',
  styleUrls: ['./choose-account-type.component.scss']
})
export class ChooseAccountTypeComponent {


  constructor(private authService: AuthService, private db: FirebaseCollectionService
    , private snackBar: MatSnackBar, private router: Router, private dialog: MatDialog) {

  }


  register($event: object) {
    this.authService.doRegisterEmail($event).then(res => {
      this.addUserToDatabase(res);
    }).catch(err => {
      this.snackBar.open(err.toString(), '', {
        duration: 200,
      });
    });

  }

  facebookLogin() {
    this.authService.facebookLoginPromise().then(res => {
      this.addUserToDatabase(res);
    }).catch(err => {
      this.snackBar.open(err.toString(), '', {
        duration: 200,
      });
    });
  }

  //  two possible state user
  //  User can already bee registered
  //  User can be already in database which in entail that they already register
  //  User can already be logged in

  GoogleLogin() {
    this.authService.GoogleLoginPromise().then(res => {
      this.addUserToDatabase(res);
    }).catch(err => {
      this.snackBar.open(err.toString(), '', {
        duration: 200,
      });
    });
  }

  private addUserToDatabase(res) {
    if (this.db.checkIfUserExists(res.user.uid)) {
      const userobj = {
        email: res.user.email,
        emailVerified: res.user.emailVerified,
        displayName: res.user.displayName,
        photo: res.user.photoURL,
      };

      this.db.addUser(res.user.uid, userobj).then(
        () => {
          this.registerCompleted();
          this.snackBar.open('Account created', '', {
            duration: 100,
          });
        }
      );
    } else {
      this.registerCompleted();
    }
  }


  registerCompleted() {
    this.router.navigate(['tenantRegisterProcess', {}]);
  }

}
