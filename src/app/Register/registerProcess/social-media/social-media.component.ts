import {Component, EventEmitter, Output} from '@angular/core';
import {AuthService} from '../../../auth.service';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent {

  @Output() requestGoogleLogin = new EventEmitter();

  @Output() requestFacebookLogin = new EventEmitter();

  constructor(private auth: AuthService) {
  }


  googleLogin() {
    this.requestGoogleLogin.emit();
  }

  facebookLogin() {
    this.requestFacebookLogin.emit();
  }
}
