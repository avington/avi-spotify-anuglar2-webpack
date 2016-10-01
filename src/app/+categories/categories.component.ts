import { SpotifyService } from './../common/services/spotify.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'categories',
    templateUrl: 'categories.component.html'
})
export class CategoriesComponent implements OnInit {

    constructor(route: ActivatedRoute,
        private router: Router,
        private spotify: SpotifyService,
        private store: Store<any>) { }

        currentPage: number;
        lastPage: number;

    ngOnInit() {
        this.getState(this.store);
        this.spotify.gettingCategories();
        this.currentPage = 1;
        this.lastPage = 2;
    }

    pageChanged = ($event) => {
        console.log('pageChanged', $event);
    }

    categories: any;

    getState = (store: Store<any>) => {
        store.select('searchList').subscribe((categories) => {
            console.log('this is an categories', categories);
            this.categories = categories;
        });
    };
}