import { Component, OnInit, Input } from '@angular/core';
import { Match } from '../match';

@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.component.html',
  styleUrls: ['./match-detail.component.scss']
})

export class MatchDetailComponent {
  @Input() match?: Match;

  constructor() { }

  ngOnInit(): void {
  }
}
