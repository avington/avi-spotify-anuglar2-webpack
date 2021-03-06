import { CategoryItemComponent } from './category-item.component';
import { CategoryListComponent } from './category-list.component';
import { FaderComponent } from './../common/components/fader/fader.component';
import { PagerComponent } from './../common/components/pager/pager.component';
import { CategoriesComponent } from './categories.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http'



console.log('`Categories` bundle loaded asynchronously');
// async components must be named routes for WebpackAsyncRoute
export const routes = [
  {path: '', component: CategoriesComponent, pathMatch: 'full'},
  {path: ':id', component: CategoriesComponent, pathMatch: 'full'},
  {path: ':id/:owner', component: CategoriesComponent, pathMatch: 'full'}
];

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    CategoriesComponent,
    CategoryListComponent,
    CategoryItemComponent,
    PagerComponent,
    FaderComponent
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
