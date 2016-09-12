import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs'
import {FormControl} from "@angular/forms";
import {SpotifyService} from '../../common'
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/filter';


export interface ISearchQuery {
  query: string;
  type: string;
}

@Component({
  moduleId: module.id,
  selector: 'search-typeahead',
  templateUrl: 'search-typeahead.component.html',
  styleUrls: ['search-typeahead.component.scss']
})
export class SearchTypeAheadComponent implements OnInit {
  constructor(private spotify: SpotifyService) {
  }

  search: ISearchQuery;
  searchType: string;
  searchTypes: Array<string>;
  searchControl = new FormControl();
  items: Observable<string>;


  ngOnInit() {

    this.search = {
      query: '',
      type: 'track'
    };

    this.searchTypes = [
      'album',
      'artist',
      'track',
      'playlist'
    ];
    /*
     this.searchControl.valueChanges
     .debounceTime(400)
     .distinctUntilChanged()
     .switchMap(term => {
     // this.spotify.search(term, this.searchType)
     console.log(term);
     });
     */
    const keypresses: Observable<any> = this.searchControl.valueChanges;

    const search = (q => console.log(q));

    this.items = keypresses
      .filter(function (text) {
        return text.length > 2; // Only if the text is longer than 2 characters
      })
      .debounceTime(400)
      .distinctUntilChanged();



    this.items.subscribe(q => {
      console.log('search', this.search);
      this.spotify.search(q, this.search.type);
    });

  };

  onTypeChange = (type: string) => {
    if (this.search.query && this.search.query.length > 2) {
      this.spotify.search(this.search.query, type);
    }

  }

}
