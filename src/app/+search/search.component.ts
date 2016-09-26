import {Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/take';

export const REMOVE = 'REMOVE';
export const SEARCH = 'SEARCH';
export const ALBUM = 'ALBUM';
export const ERROR = 'ERROR';

@Component({
  selector: 'selector',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.scss']
})
export class SearchComponent implements OnInit {
  constructor(public store: Store<any>) {
  }

  ngOnInit() {
    this.store.dispatch({type: SEARCH, payload: {}});
  }
}
