import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'artist-summary',
  templateUrl: 'artist-summary.component.html',
  styleUrls: ['artist-summary.component.scss']
})
export class ArtistsSummaryComponent implements OnInit {
  constructor() {
  }

  @Input() artist: any;

  ngOnInit() {

  }
}
