/**
 * Created by smoseley on 9/23/2016.
 */
import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'player-item',
  templateUrl: 'payer-item.component.html',
  styleUrls: ['payer-item.component.scss']
})
export class PlayerItemComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

  @Input() track: any;

}
