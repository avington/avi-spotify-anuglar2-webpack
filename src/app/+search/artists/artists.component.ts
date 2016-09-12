import {Component, OnInit, Input, ChangeDetectionStrategy} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'artists',
  templateUrl: 'artists.component.html',
  styleUrls: ['artists.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArtistsComponent implements OnInit {
  constructor() {
  }
  @Input() artists;

  ngOnInit() {
    console.log('these are the artists', this.artists);
  }



}
