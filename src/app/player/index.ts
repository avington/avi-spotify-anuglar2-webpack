/**
 * Created by smoseley on 9/23/2016.
 */
import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router'
import {HttpModule} from '@angular/http'
import {PlayerListComponent} from "./player-list.component";
import {PlayerItemComponent} from "./player-item.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule
  ],
  exports: [
    PlayerListComponent,
    PlayerItemComponent],
  declarations: [
    PlayerListComponent,
    PlayerItemComponent],
  providers: [],
})
export class PlayerModule {
}


