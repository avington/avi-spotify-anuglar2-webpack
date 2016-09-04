import {Component} from '@angular/core';

import {Title} from './title';
import {XLarge} from './x-large';
import {AuthService} from '../auth'
import {StorageService, ISpotifyUser} from "../common";


@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'home',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    Title
  ],
  styleUrls: ['./home.style.scss'],
  templateUrl: './home.template.html'
})
export class Home {
  // Set our default values
  localState = {value: ''};
  // TypeScript public modifiers
  constructor(private auth: AuthService,
              private storage: StorageService) {
  }

  hasToken: boolean;
  user: ISpotifyUser;

  ngOnInit() {
    this.hasToken = this.auth.hasUnexpiredToken();
    if (this.hasToken) {
      this.user = this.storage.getObject('user');
    }
  }


}
