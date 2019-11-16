import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../auth.service';
import {Router} from '@angular/router';

import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-already-logged-in',
  templateUrl: './already-logged-in.component.html',
  styleUrls: ['./already-logged-in.component.scss']
})
export class AlreadyLoggedInComponent implements OnInit {
  name: any;

  constructor(private auth: AuthService, private router: Router) {

  }

  ngOnInit() {
  }

  navToAccount() {
    this.router.navigate(['/account']);
  }

  logOut() {
    this.auth.logOut();
  }
}
