import {Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import {RESET} from '../../store';
import 'rxjs/add/operator/take';
import extend = require("lodash/extend");
import clone = require("lodash/clone");

@Component({
  moduleId: module.id,
  selector: 'search-list',
  templateUrl: 'search-list.component.html',
  styleUrls: ['search-list.component.scss']
})
export class SearchListComponent implements OnInit {
  constructor(
      public store: Store<any>
  ) {
    this.data = store.select('searchList')
  }

  data: any;
  ngOnInit() {
    this.getState(this.store);
  }

  private getState(store: Store<any>) {
    store.select('searchList').subscribe((state) => {
      this.data = state;
    });
  }
}
