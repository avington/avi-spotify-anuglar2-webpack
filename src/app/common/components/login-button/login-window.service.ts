import { Injectable } from '@angular/core';
import {AuthService} from '../../../auth';
import {CLIENT_ID, REDIRECT_URI} from '../../../auth/settings';


@Injectable()
export class LoginWindowService {

    constructor(
      private auth: AuthService
    ) { }

  openLoginWindow() {

    const url = this.getLoginURL([
      'user-read-private',
      'playlist-read-private',
      'playlist-modify-public',
      'playlist-modify-private',
      'user-library-read',
      'user-library-modify',
      'user-follow-read',
      'user-follow-modify'
    ]);

    const width = 450;
    const height = 730;
    const left = (screen.width / 2) - (width / 2);
    const top = (screen.height / 2) - (height / 2);

    const w = window.open(url,
      'Spotify',
      `menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=${width}, height=${height}, top=${top}, left=${left}`
    );


  };

  listenForAuthEvent = (callback?: Function) => {
    window.addEventListener('message', (event: any) => {

      if (event && event.data) {
        let hash: any = {type: ''};
        try {
           hash = JSON.parse(event.data);
        } catch(err) {}

        if (hash.type === 'access_token') {
          this.auth.setAccessToken(hash.access_token, hash.expires_in || 60);
          if (callback) {
            callback();
          }
        }
      }

    });
  };

  private getLoginURL = (scopes: Array<string>) => {
    return `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&scope=${encodeURIComponent(scopes.join(' '))}&response_type=token`;
  };
}
