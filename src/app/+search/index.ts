import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { SearchComponent } from './search.component';
import {SearchTypeAheadComponent} from './search-typeahead';
import {SearchListComponent} from './search-list/search-list.component';
import {TracksComponent} from './tracks/tracks.component';
import {TrackSummaryComponent} from './tracks/track-summary.component';

import {PlaylistSummaryComponent} from './playlists/playlist-summary.component'
import {PlaylistsComponent} from './playlists/playlists.component'

console.log('`Detail` bundle loaded asynchronously');
// async components must be named routes for WebpackAsyncRoute
export const routes = [
  { path: '', component: SearchComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    SearchComponent,
    SearchTypeAheadComponent,
    SearchListComponent,
    TracksComponent,
    TrackSummaryComponent,
    PlaylistSummaryComponent,
    PlaylistsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export default class AboutModule {
  static routes = routes;
}
