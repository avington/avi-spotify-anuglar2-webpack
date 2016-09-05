import {Component, OnInit, Input, ChangeDetectionStrategy} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'playlists',
  templateUrl: 'playlists.component.html',
  styleUrls: ['playlists.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlaylistsComponent implements OnInit {
  constructor() {
  }
  @Input() playlists;

  ngOnInit() {
    console.log('these are the playlists', this.playlists);
  }



}
