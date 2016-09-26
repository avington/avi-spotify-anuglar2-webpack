import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { Store } from '@ngrx/store';

import {SpotifyService} from './../common/services/spotify.service';

@Component({
  selector: 'album',
  templateUrl: 'album.component.html',
  styleUrls: ['album.component.scss']
})
export class AlbumComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router,
              private spotify: SpotifyService,
              private store: Store<any>) {
  }

  album: any;

  ngOnInit() {
    this.route.params.subscribe(parems => {
      this.spotify.album(parems['id']);
      this.getState(this.store);
    });
  }

  private getState = (store: Store<any>) => {
    store.select('searchList').subscribe((album) => {
      console.log('this is an album', album);
      this.album = album;
    });
  }

}
