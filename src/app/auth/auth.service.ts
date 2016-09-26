import { Injectable } from '@angular/core';
import {StorageService} from '../common/services/storage.service'
import moment = require("moment");

export interface ITokenContainer {
  token: string;
  expires: Date;
}

@Injectable()
export class AuthService {

    constructor(
      private storage: StorageService
    ) { }

  setAccessToken = (token: any, expires: number) => {

    const expiresDate = moment().add('s',expires);
    const tokenContainer: ITokenContainer = {
      token: token,
      expires: expiresDate.toDate()
    };
    this.storage.setItem('token', tokenContainer);
  };

  hasUnexpiredToken = () => {
    const container: ITokenContainer = this.storage.getObject('token');
    if (!container) {
      return false;
    }
    const expires = moment(container.expires);
    return moment().isBefore(expires);


  };
}
