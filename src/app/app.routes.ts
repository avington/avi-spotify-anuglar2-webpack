import { Routes, RouterModule } from '@angular/router';
import { Home } from './home';
import { About } from './about';
import { NoContent } from './no-content';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '',      component: Home },
  { path: 'home',  component: Home },
  { path: 'about', component: About },
  {
    path: 'detail', loadChildren: () => System.import('./+detail')
  },
  {
    path: 'search', loadChildren: () => System.import('./+search')
  },
  {
    path: 'album/:id', loadChildren: () => System.import('./+album')
  },
  {
    path: 'artist', loadChildren: () => System.import('./+artist')
  },
  {
    path: 'playlists', loadChildren: () => System.import('./+playlists')
  },
  {
    path: 'categories', loadChildren: () => System.import('./+categories')
  },
  { path: '**',    component: NoContent },
];
