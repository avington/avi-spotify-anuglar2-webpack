import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http'

import { PlaylistsComponent } from './playlists.component';
import { PlaylistItemComponent } from './playlist-item/playlist-item.component';
import { FeaturedPlaylistsComponent } from './featured-playlists/featured-playlists.component';


console.log('`Detail` bundle loaded asynchronously');
// async components must be named routes for WebpackAsyncRoute
export const routes = [
  {path: '', component: PlaylistsComponent, pathMatch: 'full'}
];

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    PlaylistsComponent,
    FeaturedPlaylistsComponent,
    PlaylistItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    HttpModule
  ]
})
export default class PlaylistModule {
  static routes = routes;
}
