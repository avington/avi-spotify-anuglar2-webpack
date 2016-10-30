import { CATEGORIES } from './../store/spotify-list.store';
import { SpotifyService } from './../common/services/spotify.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Component, OnInit, OnChanges, ChangeDetectionStrategy, NgZone } from '@angular/core';
import ex = require("lodash/extend");

@Component({
    moduleId: module.id,
    selector: 'categories',
    templateUrl: 'categories.component.html'
})
export class CategoriesComponent implements OnInit {

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private spotify: SpotifyService,
        private store: Store<any>,
        private zone: NgZone) { }

    showPanel: boolean;

    limit: number;
    offset: number;
    total: number;
    categories: any;
    label: string;
    items: Array<any>;
    categoryId: string;

    ngOnInit() {

        this.route.params.subscribe((params: any) => {
            this.categoryId = params.id || '';
            this.showPanel = false;
            this.getState(this.store);
            this.spotify.gettingCategories(20, 0, this.categoryId);
            console.log('this is the route param', params);
        })


    }

    pageChanged = ($event) => {
        console.log('pageChanged', $event.payload);
        this.spotify.gettingCategories($event.payload.limit, $event.payload.offset, this.categoryId);
        this.showPanel = false;
    };

    getState = (store: Store<any>) => {
        store.select('searchList').subscribe((payload: any) => {
            this.zone.run(() => {
                this.setProperties(payload);
                this.showPanel = true;
            });
        });
    };

    private setProperties = (payload: any) => {
        if (payload.categories) {
            this.items = this.mapCategoryItems(payload.categories.items)
            this.limit = payload.categories.limit;
            this.offset = payload.categories.offset;
            this.total = payload.categories.total;
        } else if (payload.playlists) {
            this.items = this.mapPlaylistsItems(payload.playlists.items)
            this.limit = payload.playlists.limit;
            this.offset = payload.playlists.offset;
            this.total = payload.playlists.total;
        }
        
    }

    private mapCategoryItems = (items: Array<any>) => {
        return items.map((item: any) => {
            return Object.assign(
                {},
                {
                    id: item.id,
                    name: item.name,
                    iconHeight: item.icons[0].height,
                    iconWidth: item.icons[0].width,
                    iconUrl: item.icons[0].url,
                    type: 'categories'
                }
            );
        });
    };
    
    private mapPlaylistsItems = (items: Array<any>) => {
        return items.map((item: any) => {
            return Object.assign(
                {},
                {
                    id: item.id,
                    name: item.name,
                    iconHeight: item.images[0].height,
                    iconWidth: item.images[0].width,
                    iconUrl: item.images[0].url,
                    type: 'playlists',
                    owner: item.owner.id
                }
            );
        });
    };
}