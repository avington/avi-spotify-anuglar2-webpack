import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  constructor() { }

  setItem = (key: string, item: any) => {
    const stringified = JSON.stringify(item);
    window.localStorage.setItem(key, stringified);
  };

  getString = (key: string) => {
    const text = window.localStorage.getItem(key);
    return text;
  };

  getObject = (key: string) => {
    const text = this.getString(key);
    const obj = JSON.parse(text);
    return obj;
  };

  removeItem = (key: string) => {
    window.localStorage.removeItem(key);
  };

}
