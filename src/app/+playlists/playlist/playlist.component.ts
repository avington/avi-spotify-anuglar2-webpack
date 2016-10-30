import { StorageService } from './../../common/services/storage.service';
import { Store } from '@ngrx/store';
import { SpotifyService } from './../../common/services/spotify.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, NgZone } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'playlist',
    templateUrl: 'playlist.component.html',
    styleUrls: ['playlist.component.scss']
})
export class PlaylistComponent implements OnInit {
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private spotify: SpotifyService,
        private storage: StorageService,
        private store: Store<any>,
        private zone: NgZone
    ) { }

    showPanel: boolean;

    ngOnInit() {
        this.route.params.subscribe(this.onParamsLoaded);
        this.showPanel = false;
        this.getState(this.store);
    };

    private onParamsLoaded = (params: any) => {
        this.spotify.gettingPlaylist(params.id, params.owner, 20, 0);
    };

    private getState = (store: Store<any>) => {
        store.select('searchList').subscribe(this.playlistSubscription);
    };

    private playlistSubscription = (playload: any) => {
        this.zone.run(() => {
            console.log('this is the pl')
        })

    };


}