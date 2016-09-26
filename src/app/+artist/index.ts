import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {ArtistComponent} from './artist.component'
import {PlayerModule} from "../player/index";
import {AlbumThumbnailComponent} from "./album-thumbnails.component";


console.log('`Artist` bundle loaded asynchronously');
// async components must be named routes for WebpackAsyncRoute
export const routes = [
  { path: ':id', component: ArtistComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    ArtistComponent,
    AlbumThumbnailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    PlayerModule
  ]
})
export default class SearchModule {
  static routes = routes;
}
