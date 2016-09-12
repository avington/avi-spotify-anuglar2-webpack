import {Component, OnInit, Input} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'playlist-summary',
  templateUrl: 'playlist-summary.component.html',
  styleUrls: ['playlist-summary.component.scss']
})
export class PlaylistSummaryComponent implements OnInit {
  constructor() {
  }

  @Input() playlist: any;

  ngOnInit() {

  }
}
