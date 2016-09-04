import {Injectable} from '@angular/core';
import {StorageService} from './storage.service'
import {ITokenContainer} from "../auth";
import {Headers, Http, Response} from '@angular/http';
import {Observable}     from 'rxjs/Observable';

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
              private http: Http) {
  }

  getMe = () => {
    const tokenContainer: ITokenContainer = this.storage.getObject('token');

    const authHeader = new Headers();
    if (tokenContainer && tokenContainer.token) {
      authHeader.append('Authorization', `Bearer ${tokenContainer.token}`);
    }

    return this.http.get(
      `${BASE_URL}/me`, {
        headers: authHeader
      })
      .map(this.extractData);
  };

  private extractData = (res: Response) => {
    let body = res.json();
    return body || {};
  };

  /**
   private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
   */
}

