import {Component, OnInit, Input, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'player-list',
  templateUrl: 'player-list.component.html',
  styleUrls: ['player-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerListComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
    console.log('these are the tracks', this.tracks)
  }

  @Input() tracks: any;

}
