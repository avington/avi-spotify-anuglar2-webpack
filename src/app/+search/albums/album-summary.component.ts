import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'album-summary',
  templateUrl: 'album-summary.component.html',
  styleUrls: ['album-summary.component.scss']
})
export class AlbumSummaryComponent implements OnInit {
  constructor() {
  }

  @Input() album: any;

  ngOnInit() {

  }
}
