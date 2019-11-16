import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  // name: string;
  // profilePictureURL: string;
  user: any;
  init = false;

  constructor(private auth: AuthService) {
    // auth.UserObservable().subscribe(user => {
    //   this.init = true;
    //   this.user = user;
    // });
  }

  ngOnInit() {
  }

}
