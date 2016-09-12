import {Component, OnInit, Input, ChangeDetectionStrategy} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'albums',
  templateUrl: 'albums.component.html',
  styleUrls: ['albums.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlbumsComponent implements OnInit {
  constructor() {
  }
  @Input() albums;

  ngOnInit() {
    console.log('these are the albums', this.albums);
  }



}
