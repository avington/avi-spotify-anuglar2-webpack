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

    constructor(route: ActivatedRoute,
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

    ngOnInit() {

        this.showPanel = false;
        this.getState(this.store);
        this.spotify.gettingCategories();
    }

    pageChanged = ($event) => {
        console.log('pageChanged', $event);
    };

    getState = (store: Store<any>) => {
        store.select('searchList').subscribe((payload: any) => {
            if (payload.categories) {
                this.zone.run(() => {
                    this.setProperties(payload.categories)
                })

            }


        });
    };

    setProperties = (categories: any) => {
        this.categories = Object.assign({}, categories);
        this.limit = categories.limit;
        this.offset = categories.offset;
        this.total = categories.total;
    }
}