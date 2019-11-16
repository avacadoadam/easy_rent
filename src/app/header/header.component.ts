import {Component} from '@angular/core';
import {AuthService} from '../auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  isUserLoggedIn: boolean;
  userProfilePicture: string;
  userName: string;
  init = false; // To determine weather Obervable has responsed

  constructor(private auth: AuthService) {
    auth.UserObservable().subscribe(user => {
      this.init = true;
      if (user == null) {
        this.isUserLoggedIn = false;
      } else {
        this.isUserLoggedIn = true;
        this.userName = user.displayName;
        this.userProfilePicture = user.photoURL;
      }
    });
  }

}


