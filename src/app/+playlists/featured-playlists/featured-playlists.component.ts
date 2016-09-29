import { Store } from '@ngrx/store';
import { SpotifyService } from './../../common/services/spotify.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'featured-playlists',
    templateUrl: 'featured-playlists.component.html',
    styleUrls: ['featured-playlists.component.scss']
})
export class FeaturedPlaylistsComponent implements OnInit {
    constructor(
        private route: ActivatedRoute,
              private router: Router,
              private spotify: SpotifyService,
              private store: Store<any>
    ) { }

    featuredPlaylists: any;

    ngOnInit() {
        this.getState(this.store);
        this.spotify.featuredPlaylists();
     }

     private getState = (store: Store<any>) => {
    store.select('searchList').subscribe((featuredPlaylists) => {
      console.log('this is the featuredPlaylists', featuredPlaylists);
      this.featuredPlaylists = featuredPlaylists;
    });
  }

}