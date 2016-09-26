import {Component, OnInit, Input, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'tracks',
  templateUrl: 'tracks.component.html',
  styleUrls: ['tracks.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TracksComponent implements OnInit {
  constructor() {
  }
  @Input() tracks;

  ngOnInit() {
    console.log('these are the tracks', this.tracks);
  }



}
