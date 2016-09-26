/**
 * Created by smoseley on 9/24/2016.
 */
import {Component, OnInit} from '@angular/core';
import {SpotifyService} from "../common/services/spotify.service";
import {ActivatedRoute, Router} from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'artist',
  templateUrl: 'artist.component.html',
  styleUrls: ['artist.component.scss']
})
export class ArtistComponent implements OnInit {
  constructor(private route: ActivatedRoute,
              private router: Router,
              private spotify: SpotifyService,
              private store: Store<any>) {
  }

  artist: any;

  ngOnInit() {
    this.route.params.subscribe(parems => {
      this.spotify.artist(parems['id']);
      this.getState(this.store);
    });
  };

  private getState = (store: Store<any>) => {
    store.select('searchList').subscribe((artist) => {
      console.log('this is an artist', artist);
      this.artist = artist;
    });
  };

}
