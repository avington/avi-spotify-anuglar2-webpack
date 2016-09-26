import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'track-summary',
  templateUrl: 'track-summary.component.html',
  styleUrls: ['track-summary.component.scss']
})
export class TrackSummaryComponent implements OnInit {
  constructor() {
  }

  @Input() track: any;

  ngOnInit() {
  }
}
