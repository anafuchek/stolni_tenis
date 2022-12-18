import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../player';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.scss']
})

export class PlayerDetailComponent {
  @Input() player?: Player;

  constructor() { }

  ngOnInit(): void {
  }

}