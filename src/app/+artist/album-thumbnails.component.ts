import {Component, OnInit, Input} from '@angular/core';

const template: string = `
  <div *ngIf="albums && albums.items">

     <div *ngFor="let album of albums.items">
      <a routerLink="/album/{{album.id}}">
        <figure>
          <img [src]="album.images[2].url" alt="{{album.name}}">
          <figcaption>{{album.name}}</figcaption>
        </figure>
      </a>
  </div>
</div>
`;

@Component({
  selector: 'album-thumbnails',
  template: template,
  styleUrls: ['album-thumbnails.component.scss']
})
export class AlbumThumbnailComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
    console.log('these are the artist albums', this.albums);
  }

  @Input() albums: Array<any>;
}
