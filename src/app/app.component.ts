/*
 * Angular 2 decorators and services
 */
import {Component, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';

import {
  LoginWindowService,
  StorageService,
  SpotifyService,
  ISpotifyUser
} from './common'

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.style.scss'
  ],
  template: `
  <div class="body">
    <div class="main">
      <nav class="left">
        <ul class="flex-nav">
          <li><a routerLink="/home">Home</a></li>
          <li><a routerLink="/search">Search</a></li>
          <li><a routerLink="/playlists">Playlists</a></li>
          <li><a href="#">Child 04</a></li>
          <li><a href="#">Child 05</a></li>
          <li><a href="#">Child 06</a></li>
        </ul>
      </nav>
      <nav class="right">
        <ul class="flex-nav">
          <li *ngIf="user">
            <a routerLink="/user"><img [src]="userImage"></a>
          </li>
        </ul>
      </nav>
    </div>
      <!-- Routed views go here -->
    <router-outlet></router-outlet>
</div>
  `
})
export class App {
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';

  constructor(private loginWindow: LoginWindowService,
              private spotify: SpotifyService,
              private router: Router,
              private storage: StorageService) {

  }

  user: any;
  userImage: string;

  ngOnInit() {
    this.loginWindow.listenForAuthEvent(() => {
      this.spotify.getMe()
        .subscribe(
          (user: ISpotifyUser) => {
            this.user = user;
            this.userImage = user.images[0].url;
            this.storage.setItem('user', user);
            this.router.navigate(['/home']);
          },
          error => console.log(error)
        )
    });
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
