import {Injectable} from '@angular/core';
import {Observable}     from 'rxjs/Rx';
import {Headers, Http, Response} from '@angular/http';
import {Router} from '@angular/router'

import {StorageService} from './storage.service'
import {ITokenContainer} from "../../auth";


import {Store} from '@ngrx/store';
import {RESET} from '../../store/spotify-list.store';

const BASE_URL = 'https://api.spotify.com/v1';

export interface ISpotifyImage {
  height?: any;
  url: string;
  width?: any;
}

export interface ISpotifyUser {
  country: string;
  display_name: string;
  external_urls: any;
  followers: {
    total: number
  },
  href: string;
  id: string;
  images: Array<ISpotifyImage>;
  product: string;
  type: string;
  user: string;
}

@Injectable()
export class SpotifyService {

  constructor(private storage: StorageService,
              private http: Http,
              private store: Store<any>,
              private router: Router
          ) {
  }

  getMe = () => {
    const authHeader = this.addTokenToHeader();

    return this.http.get(
      `${BASE_URL}/me`, {
        headers: authHeader
      })
      .map(this.extractData);
  };

  search = (query: string, inputType: string) => {
    this.searchApi(query, inputType)
      .subscribe((data) => {
        this.store.dispatch({type: RESET, payload: data});
      },
        (error) => {
          console.log(error);
          if (error && error.status === 401) {
            this.router.navigate(['/home']);
          }
        });

  };

  private searchApi = (q: string, inputType: string) => {
    // q=young+the+giant&type=playlist
    const authHeader = this.addTokenToHeader();
    q = q.replace(' ', '+');
    return this.http.get(
      `${BASE_URL}/search?q=${q}&type=${inputType}`, {
        headers: authHeader
      })
      .map(this.extractData)
      .catch(this.handleError);

  };

  private addTokenToHeader() {
    const tokenContainer: ITokenContainer = this.storage.getObject('token');

    const authHeader = new Headers();
    if (tokenContainer && tokenContainer.token) {
      authHeader.append('Authorization', `Bearer ${tokenContainer.token}`);
    }
    return authHeader;
  }

  private extractData = (res: Response) => {
    let body = res.json();
    return body || {};
  };

  handleError = (error: any) => {
    return Observable.throw(error.json().error);
  }


}
;

